import React from 'react';

export default function Calendar({date}) {
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const monthsInCase = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const now = {
    year: date.getFullYear(),
    month: months[date.getMonth()],
    monthInCase: monthsInCase[date.getMonth()],
    data: date.getDate(),
    day: days[date.getDay() - 1],
  };

  let day = daysInMonth[date.getMonth() - 1];

  let first = 1;
  const today = 'ui-datepicker-today';
  const overMonth = 'ui-datepicker-other-month';

  return (
    <div class="ui-datepicker">
      <div class="ui-datepicker-material-header">
        <div class="ui-datepicker-material-day">{now.day}</div>
        <div class="ui-datepicker-material-date">
          <div class="ui-datepicker-material-day-num">{now.data}</div>
          <div class="ui-datepicker-material-month">{now.monthInCase}</div>
          <div class="ui-datepicker-material-year">{now.year}</div>
        </div>
      </div>
      <div class="ui-datepicker-header">
        <div class="ui-datepicker-title">
          <span class="ui-datepicker-month">{now.month}</span>&nbsp;<span class="ui-datepicker-year">{now.year}</span>
        </div>
      </div>
      <table class="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col class="ui-datepicker-week-end"/>
          <col class="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className = {first + 1 === now.data ? today : ''}>{first}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
          </tr>
          <tr>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
          </tr>
          <tr>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
          </tr>
          <tr>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? today : ''}>{first += 1}</td>
          </tr>
          <tr>
            <td className = {first + 1 === now.data ? overMonth : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? overMonth : ''}>{first += 1}</td>
            <td className = {first + 1 === now.data ? overMonth : ''}>{first += 1}</td>
            <td className = {overMonth}>{first = 1}</td>
            <td className = {overMonth}>{first += 1}</td>
            <td className = {overMonth}>{first += 1}</td>
            <td className = {overMonth}>{first += 1}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
