import React from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/logo.png";
import flag1 from "../assets/images/resources/flag-1-1.jpg";
import { useDispatch, useSelector } from "react-redux";


const MobileNav = () => {
  const contactState = useSelector((state) => state.contact)
  const aboutState = useSelector((state) => state.about)
  const {loading  , contact, status} = contactState
  const {about} = aboutState
  const dispatch = useDispatch()
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay side-menu__block-overlay"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close side-menu__close-btn">
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="azino-icon-email"></i>
            <a href={`mailto:${loading ? 'loading' : contact.email}`}>{loading ? 'loading' : contact.email}</a>
          </li>
          <li>
            <i className="azino-icon-telephone"></i>
            <a href={`tel:${loading ? 'loading' : contact.phone_1}`}>{loading ? 'loading' : contact.phone_1} </a> - 
                    <a href={`tel:${loading ? 'loading' : contact.phone_2}`}> {loading ? 'loading' : contact.phone_2}</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
              <a href={loading ? 'loading' : about.twitter_link} aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={loading ? 'loading' : about.fb_link} aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href={loading ? 'loading' : about.linkedin_link} aria-label="pinterest">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={loading ? 'loading' : about.youtube_link} aria-label="instagram">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
        </div>
      </div>
</div>
  );
};

export default MobileNav;
