import * as React from "react";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdUnits } from "@mui/icons-material";

export default function Calender() {
  return (
    <>
      <LocalizationProvider dateAdapter={}>
        <DateCalendar />
      </LocalizationProvider>
    </>
  );
}
