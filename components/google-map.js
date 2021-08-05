import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.995673298442!2d7.432361615146582!3d9.064157493496493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e74da488a5485%3A0xb9ec0a0c7acf5ee3!2sDiamond%20Development%20Initiatives%20(DDI)%20Nigeria!5e0!3m2!1sen!2sch!4v1623752408246!5m2!1sen!2sch"
      allowfullscreen
      className={`map__${extraClass}`}
      loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
