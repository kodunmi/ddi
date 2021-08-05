import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constant";
import GalleryCard from "./gallery-card";


const GalleryPage = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/photos`,
      );
 
      setPhotos(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  console.log(photos);
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
          {
            loading?'loading': photos.map(({secure_url,text})=> <GalleryCard text={text} image={secure_url} />)
          }
          {/* <GalleryCard image={galleryImage1} />
          <GalleryCard image={galleryImage2} />
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

export default GalleryPage;
