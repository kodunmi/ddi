import React from "react";
import Link from "next/link";

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function tConvert (timeString) {
  var hourEnd = timeString.indexOf(":");
  var H = +timeString.substr(0, hourEnd);
  var h = H % 12 || 12;
  var ampm = H < 12 ? "AM" : "PM";
  return timeString = h + timeString.substr(hourEnd, 3) + ampm;
}


const EventCard = ({ data }) => {
  const { image, title, date, opening, closing, location , id} = data;
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-image">
          <div className="event-card-image-inner">
            <img height='100px' width='100px' src={image} alt="" />
            <span>{`${new Date(date).getDate()} ${ months[new Date(date).getMonth()] }`}</span>
          </div>
        </div>
        <div className="event-card-content">
          <h3>
            <Link href={`event/${id}`}>
              <a>{title}</a>
            </Link>
          </h3>
          <ul className="event-card-list">
            <li>
              <i className="azino-icon-clock"></i>
              <strong>Time:</strong> {`${(opening)} ${(closing)}`}
            </li>
            <li>
              <i className="azino-icon-pin1"></i>
              <strong>Location:</strong> {location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
