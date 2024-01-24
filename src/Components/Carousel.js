import React, { useState, useEffect } from "react";
import { CDN_URL2 } from "../utils/constants";

const Carousel = () => {
  const [carRes, setCarRes] = useState([]);

  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8563032&lng=74.83609179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      const carResData = json.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      setCarRes(carResData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderedImg = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';
  
  const handleScroll = (direction) => {
    const container = document.getElementById('box');
    const step = 20;
    const distance = 400;

    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        container.scrollLeft -= step;
      } else {
        container.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        
        clearInterval(slideTimer);
      }
    }, 10);
  };

  return (
    <>
      <div className="scoller">
        <div className="sbtn">
          <span>What's on your mind?</span>
          <div className="scbtn">
            <i className="fa-solid fa-arrow-left" id="left" onClick={() => handleScroll('left')}></i>
            <i className="fa-solid fa-arrow-right" id="right" onClick={() => handleScroll('right')}></i>
          </div>
        </div>
        <div className="imgs" id="box">
          {carRes.map((carResto) => (
            <div key={carResto.id} className="i1 img">
              <img src={`${renderedImg}${carResto.imageId}`} alt={`Carousel Image `} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
