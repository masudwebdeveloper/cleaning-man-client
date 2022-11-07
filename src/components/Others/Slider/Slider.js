import React from 'react';
import SliderItem from './SliderItem';

const Slider = () => {
   const sliderData = [
      {
         image: "https://i.postimg.cc/rs0KM8HY/person-taking-care-office-cleaning-23-2149374458.webp",
         prev: 4,
         id: 1,
         next: 2
      },
      {
         image: "https://i.postimg.cc/Kz1nYxSM/240-F-416839335-NWT6vhg-FIf-Po-Wfjd-Kh-Gyj8enuqls9y8-N.jpg",
         prev: 1,
         id: 2,
         next: 3
      },
      {
         image: "https://i.postimg.cc/Hn4jYhxM/1000-F-331850802-q-BUm-RWPyqgnf-BBHPbzqf-T8cud-G55-Y1u-F.jpg",
         prev: 2,
         id: 3,
         next: 4
      },
      {
         image: "https://i.postimg.cc/qqk4LMJt/1000-F-283626778-WKekd-Mp-Cx4l2r-Hpb8mqxa-Zfej-RGf-Pd-Wl.jpg",
         prev: 3,
         id: 4,
         next: 1
      },
   ]
   return (
      <div className="carousel w-full h-[500px] container mx-auto">
         {
            sliderData.map(slider => <SliderItem key={slider.id} slider={slider}></SliderItem>)
         }
      </div>
   );
};

export default Slider;