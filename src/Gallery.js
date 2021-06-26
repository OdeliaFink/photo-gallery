import React from 'react';
import './Gallery.css';
import Img1 from './Images/Img1.jpeg';
import Img2 from './Images/Img2.jpeg';
import Img3 from './Images/Img3.jpeg';
import Img4 from './Images/Img4.jpeg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
  ];

  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
