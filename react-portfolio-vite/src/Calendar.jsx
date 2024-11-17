import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ memoLists, handleCreatButtonClick, setTargetDate }) => {
  const handleDateClick = (arg) => {
    handleCreatButtonClick();
    setTargetDate(arg.dateStr);
    console.log(arg.dateStr);
  };

  const handleEventClick = (arg) => {
    console.log(arg.event);
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={memoLists}
      dateClick={handleDateClick}
      locale="ja"
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      }}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;
