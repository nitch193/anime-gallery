import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ImageGallery = ({ type, purity }) => {
  const [Images, setImages] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getImages = async () => {
      const response = await axios.get("https://anime-gallery-api.deno.dev/",{
        params:{
          type,
          purity
        }
      }
    ).catch(error => {
        setErr(true);
      });
      console.log("res",response)
      setLoading(false);
      setImages(response.data.data);
    };
    getImages();
  }, [type, setImages, setErr, setLoading, purity]);

  return (
    <div className="gallery-body">
      {loading ? (
        <div>Loading Images...</div>
      ) : err ? (
        <div>Server error </div>
      ) : (
        <div className='image-gallery-div'>
          {Images.map((image, index) => {
            return (
              <div key={index} className='gallery-item'>
                <button className='download-button' onClick={()=>{
                   const a = document.createElement('a')
                   a.href = image.path
                   document.body.appendChild(a)
                   a.click()
                   document.body.removeChild(a)
                }}>
                  <img src='./download.svg' alt='Download button'/>
                </button>
                <img className='gallery-image' src={image.thumbs.large} alt={image.category} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
