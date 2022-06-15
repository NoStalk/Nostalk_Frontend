import { useState } from 'react'
import '../App.css'
import style from '../styles/ContestPage.module.css'
import FullCalendar, { DateSpanApi, EventChangeArg, EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import EventCard from '../components/EventCard'

type Event = {
  title: string,
  publisher: string,
  contestLink: string,
  start: Date,
  end: Date,

}

function Contests() {

  const exEvent: Event = {
    title: "Bi-weekly contest 80",
    publisher: 'geeksforgeeks.com',
    contestLink: 'https://leetcode.com/contest/biweekly-contest-80/',
    start: new Date(),
    end: new Date()
  }
  let dummyEventArray: Event[] = [];
  dummyEventArray.push(exEvent, exEvent, exEvent, exEvent, exEvent, exEvent, exEvent, exEvent, exEvent, exEvent, exEvent);
  console.log(dummyEventArray)
  const [events, setEvents] = useState<Event[]>(dummyEventArray)

  const [paneDate, setPaneDate] = useState<Date>(new Date());



  const handleDateClick = (arg: DateClickArg) => { setPaneDate(arg.date); }
  const handleEventClick = (arg: EventClickArg) => {
    if (arg.event.start) {
      setPaneDate(arg.event.start);
    }
    else {
      console.error("Event object passed to handleEventClick does not have a start date!")
    }
  }

  const rejectRangeSelections = (selectInfo: DateSpanApi): boolean => {
    const startDay = selectInfo.start.getUTCDay();
    const endDay = selectInfo.end.getUTCDay();

    return ((endDay - startDay) <= 1) || (startDay === 6 && endDay === 0);
  }


  return (
    <div className={style.mainDiv} >
      <div className={style.calenderDiv}>
        <div style={{ width: "85%" }}>
          <FullCalendar
            height="90vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            dayMaxEvents={true}
            views={{
              dayGrid: {
                // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
              },
            }}
            headerToolbar={{
              start: '',
              center: 'title',
              end: 'today prev,next'
            }}

            selectable={true}
            selectAllow={rejectRangeSelections}
            dateClick={handleDateClick}
            eventClick={handleEventClick}

            events={events}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: false
            }}

          />
        </div>
      </div>
      <div className={style.eventDetailsContainerDiv}>
        <div className={style.eventDetailsDiv}>
          <div className={style.paneDateDiv}>
            {paneDate.toLocaleDateString('en-in', { weekday: "long", year: "numeric", month: "numeric", day: "numeric" })}
          </div>
          {events.filter(event => {
            return event.start.getFullYear() === paneDate.getFullYear() &&
              event.start.getMonth() === paneDate.getMonth() &&
              event.start.getDate() === paneDate.getDate()
          })
            .map(event => <EventCard event={event} />)}
        </div>
      </div>
    </div >
  )
}
export type { Event }
export default Contests