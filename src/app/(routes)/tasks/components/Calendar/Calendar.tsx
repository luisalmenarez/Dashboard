'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import multiMonth from '@fullcalendar/multimonth';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarProps } from './Calendar.types';

export const Calendar = (props: CalendarProps) => {
  const { companies, events } = props;

  return <div>Calendar</div>;
};
