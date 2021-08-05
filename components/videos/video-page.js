import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constant";
import VideoCardThree from "./video-card-three";

const VideoPage = () => {

  const [loading, setLoading] = useState(true);
  const [videos, setvideos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/videos`,
      );
 
      setvideos(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  console.log(videos);
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
          {
            loading?'loading': videos.map(({link,text})=><VideoCardThree text={text} link={link}/>)
          }
          
          {/* <VideoCardThree/>
          <VideoCardThree/>
          <VideoCardThree/> */}
          {/* <GalleryCard image={galleryImage2} />
          <GalleryCard image={galleryImage3} />
          <GalleryCard image={galleryImage4} />
          <GalleryCard image={galleryImage5} />
          <GalleryCard image={galleryImage6} />
          <GalleryCard image={galleryImage7} />
          <GalleryCard image={galleryImage8} />
          <GalleryCard image={galleryImage9} /> */}
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
