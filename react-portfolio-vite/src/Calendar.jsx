import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({
  memoLists,
  handleCreatButtonClick,
  setTargetDate,
  handleOpen,
}) => {
  const handleDateClick = (arg) => {
    handleCreatButtonClick();
    setTargetDate(arg.dateStr);
    console.log(arg.dateStr);
  };

  const handleEventClick = (arg) => {
    console.log(arg.event.id);
    console.log(memoLists);

    const targetItem = memoLists.find((item) => item.id === arg.event.id);
    handleOpen(targetItem);
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
