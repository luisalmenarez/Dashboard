'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { ModalAddEventProps } from './ModalAddEvent.types';
import { FormEvent } from '../FormEvent';

export const ModalAddEvent = (props: ModalAddEventProps) => {
  const { open, companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]:">
        <DialogHeader>
          <DialogTitle>Add a new event</DialogTitle>
        </DialogHeader>
        <FormEvent
          setOnSaveNewEvent={setOnSaveNewEvent}
          companies={companies}
          setNewEvent={setNewEvent}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
