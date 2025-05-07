'use client';

import React, { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format, eachDayOfInterval, isSameDay } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './CalenderPicker.css';

const BookingCalendar = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  const disabledDays = [
    new Date(2025, 4, 15),
    new Date(2025, 4, 17),
    new Date(2025, 4, 20),
  ];

  const isRangeValid = (from: Date, to: Date) => {
    const daysInRange = eachDayOfInterval({ start: from, end: to });
    return !daysInRange.some(day =>
      disabledDays.some(disabled => isSameDay(disabled, day))
    );
  };

  const handleSelect = (selectedRange?: DateRange) => {
    if (selectedRange?.from && selectedRange?.to) {
      if (isRangeValid(selectedRange.from, selectedRange.to)) {
        setRange(selectedRange);
      } else {
        alert('Selected range includes unavailable dates. Please try again.');
        setRange(undefined);
      }
    } else {
      setRange(selectedRange);
    }
  };

  return (
    <div className="calendar-wrapper">
      <h2>Select your stay dates</h2>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        disabled={disabledDays}
        numberOfMonths={1}
        pagedNavigation
        fromDate={new Date()}
        className="airbnb-calendar"
        footer={
          range?.from && range?.to ? (
            <p className="calendar-footer">
              You selected from <strong>{format(range.from, 'PPP')}</strong> to{' '}
              <strong>{format(range.to, 'PPP')}</strong>
            </p>
          ) : (
            <p className="calendar-footer">Please select a valid date range.</p>
          )
        }
      />
    </div>
  );
};

export default BookingCalendar;
