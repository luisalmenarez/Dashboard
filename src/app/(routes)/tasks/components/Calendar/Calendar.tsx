'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import multiMonthPlugin from '@fullcalendar/multimonth';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js';
import axios from 'axios';
import { formatDate } from '@/lib/formatDate';
import { CalendarProps } from './Calendar.types';
import { toast } from '@/components/ui';
import { ModalAddEvent } from '../ModalAddEvent';
import { ConfirmDialog } from '../ConfirmDialog';

export const Calendar = (props: CalendarProps) => {
  const { companies, events } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    companieSelected: {
      name: '',
      id: '',
    },
  });
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<any>(null);

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(selected);
  };

  useEffect(() => {
    if (onSaveNewEvent && selectedItem?.view.calendar) {
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companieSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: 'H(:mm)',
      };

      axios
        .post(
          `/api/company/${newEvent.companieSelected.id}/event`,
          newEventPrisma
        )
        .then(() => {
          toast({ title: 'Event successfully created.' });
          router.refresh();
        })
        .catch((error) => {
          toast({
            title: 'An error occurred when creating the event',
            variant: 'destructive',
          });
        });
      setNewEvent({
        eventName: '',
        companieSelected: {
          name: '',
          id: '',
        },
      });
      setOnSaveNewEvent(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSaveNewEvent, selectedItem, event]);

  const handleEventClick = async (selected: any) => {
    setEventToDelete(selected.event);
    setConfirmDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (eventToDelete) {
      try {
        await axios.delete(`/api/event/${eventToDelete._def.publicId}`);
        toast({
          title: 'Event Deleted',
        });
        router.refresh();
      } catch (error) {
        toast({
          title: 'Something went wrong',
          variant: 'destructive',
        });
      } finally {
        setConfirmDialogOpen(false);
        setEventToDelete(null);
      }
    }
  };

  return (
    <section>
      <article className="md:flex gap-x-3">
        <div className="w-[200px] relative">
          <div className="overflow-auto absolute left-0 top-0 h-full w-full">
            <p className="text-xl font-medium mb-3">Listado de tareas</p>
            {events.map((currentEvent) => (
              <div
                key={currentEvent.id}
                className="p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background"
              >
                <p className="font-bold"> {currentEvent.title} </p>
                <p> {formatDate(currentEvent.start)} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 calendar-container">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: 'prev today next',
              center: 'title',
              right:
                'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth',
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
          />
        </div>
      </article>
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        setOnSaveNewEvent={setOnSaveNewEvent}
        companies={companies}
        setNewEvent={setNewEvent}
      />
      <ConfirmDialog
        isOpen={confirmDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDialogOpen(false)}
        eventTitle={eventToDelete?.title || ''}
      />
    </section>
  );
};

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="bg-slate-200 dark:bg-background w-full p-1">
      <i> {eventInfo.event.title} </i>
    </div>
  );
}
