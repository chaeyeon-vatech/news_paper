import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../../styles/filter.styles";

interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  placeholder?: string; // placeholder 프로퍼티 추가
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  placeholder, // placeholder를 props에서 받음
}) => {
  const [startDate, setStartDate] = useState<Date | null>(selectedDate);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div style={{ width: "100%" }}>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        customInput={<Input type={"date"} />}
      />
    </div>
  );
};

export default DatePickerComponent;
