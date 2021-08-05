import Link from "next/link";
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const GalleryCard = ({ image,text,url }) => {
  return (
    <SimpleReactLightbox>
      <div className="gallery-card">
        <img src={image} className="img-fluid" alt="" />
        <SRLWrapper>
          <div className="gallery-content">
            <a
              href={url? '/'+url: image}
              className="img-popup"
              data-attribute="SRL"
              aria-label="open image"
            >
              {/* <img src={image} className="img-fluid sr-only" alt="" /> */}
              <div>
                 <i className="fal fa-plus"></i>
              {text && <p style={{fontSize:'20px'}}>{text}</p>} 
              </div>
             
            </a>
          </div>
        </SRLWrapper>
      </div>
    </SimpleReactLightbox>
  );
};

export default GalleryCard;
