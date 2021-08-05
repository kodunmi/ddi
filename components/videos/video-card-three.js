import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

const VideoCardThree = ({text,link}) => {
  console.log(link);
  return (
    <div>
    <iframe width="560" height="315" src={text} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p></p>
    </div>
  );
};

export default VideoCardThree;
