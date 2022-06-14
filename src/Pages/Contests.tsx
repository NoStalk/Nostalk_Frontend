import { useState } from 'react'
import '../App.css'
import style from '../styles/ContestPage.module.css'
import FullCalendar, { DateSpanApi } from '@fullcalendar/react'
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
    publisher: 'leetcode.com',
    contestLink: 'https://leetcode.com/contest/biweekly-contest-80/',
    start: new Date(),
    end: new Date()
  }

  const [events, setEvents] = useState([
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },
    { title: 'event 2', date: '2022-05-30' },


    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },
    { title: 'event 2', date: '2022-06-06' },

    { title: 'event 1', start: new Date('2022-06-13T07:30:00'), end: new Date('2022-06-13T10:30:00') },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },
    // { title: 'event 2', date: '2022-06-13' },


    { title: 'event 2', date: '2022-06-13' },
    { title: 'event 1', date: '2022-06-20' },
    { title: 'event 1', date: '2022-06-20' },
    { title: 'event 1', date: '2022-06-20' },
    { title: 'event 1', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },
    { title: 'event 2', date: '2022-06-20' },



    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },
    { title: 'event 2', date: '2022-06-27' },


    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },
    { title: 'event 2', date: '2022-07-04' },



  ])

  const [paneDate, setPaneDate] = useState<Date>(new Date());



  const handleClick = (arg: DateClickArg) => {
    console.log(arg.date);

    setPaneDate(arg.date);

  }
  const rejectRangeSelections = (selectInfo: DateSpanApi): boolean => {
    //TODO populate side-panel
    const startDay = selectInfo.start.getUTCDay();
    const endDay = selectInfo.end.getUTCDay();
    // console.log(startDay, endDay);

    return ((endDay - startDay) <= 1) || (startDay === 6 && endDay === 0);

  }
  return (
    <div className={style.mainDiv} >
      <div className={style.calenderDiv}>
        <div style={{ width: "85%" }}>
          <FullCalendar
            height="90vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            dayMaxEvents={2}
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
            dateClick={handleClick}

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
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
          <EventCard event={exEvent}></EventCard>
        </div>
      </div>
    </div >
  )
}
export type { Event }
export default Contests