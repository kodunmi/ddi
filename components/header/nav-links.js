import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className="dropdown">
        <Link href="/index">
          <>
            <a>About DDI</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/who-we-are">
              <a>Who we are</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/partner">
              <a>Our Partners</a>
            </Link>
          </li>
          <li>
            <Link href="/where-we-work">
              <a>Where We Work</a>
            </Link>
          </li>
          {/* <li className="dropdown">
            <Link href="#">
              <>
                <a>Header Styles</a>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/index">
                  <a>Header One</a>
                </Link>
              </li>
              <li>
                <Link href="/index-2">
                  <a>Header Two</a>
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/index">
          <>
            <a>What We Do</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/what-we-do/1">
              <a>Business Support & Enterprise Management</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/2">
              <a>Agricultural Value Chain Improvement</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/3">
              <a>Renewable/Off-Grid Energy Support</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/4">
              <a>Agricultural Commodity Market Access Services</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/5">
              <a>Youth/Women-led Enterprise Support</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/6">
              <a>Grants Management</a>
            </Link>
          </li>
          <li>
            <Link href="/what-we-do/7">
              <a>Employability Program</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/index">
          <>
            <a>Impact</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/success-story">
              <a>Success Stories</a>
            </Link>
          </li>
          <li>
            <Link href="/video">
              <a>Videos</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Photos</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/index">
          <>
            <a>News</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>DDI in the News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/event">
              <a>Event</a>
            </Link>
          </li>
        </ul>
      </li>
     <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Contact Us</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/be-a-partner">
              <a>Be A Partner</a>
            </Link>
          </li>
          <li>
            <Link href="/become-volunteer">
              <a>Volunteer With Us</a>
            </Link>
          </li>
          <li>
            <Link href="/career">
              <a>Career Opportunity</a>
            </Link>
          </li>
        </ul>
      </li>
      {/* <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Causes</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/causes">
              <a>Causes</a>
            </Link>
          </li>
          <li>
            <Link href="/cause-details">
              <a>Cause Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="dropdown">
        <Link href="/events">
          <>
            <a>Events</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/event-details">
              <a>Event Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/news">
          <>
            <a>News</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Pages</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/volunteers">
              <a>Volunteers</a>
            </Link>
          </li>
          <li>
            <Link href="/become-volunteer">
              <a>Become a Volunteer</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li> */}
    </ul>
  );
};

export default NavLinks;
