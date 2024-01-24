import React from 'react';
import { CDN_URL } from '../utils/constants';


export default function Resto(props) {
  const {resData} = props;
  const {
    info: {
      name,
      areaName,
      avgRating,
      cuisines,
      deliveryTime,
      cloudinaryImageId,
    } = {},
  } = resData;

  return (
    <div className="hotels-name">
        <div className="hot-res1 q1">
          <div id="i1" style={{backgroundImage: CDN_URL +cloudinaryImageId}}></div>

          <div className="res n">
            <p>{name}</p>
            <div className="in ph">
              <i className="fa-solid fa-star"></i>
              <p>
                {avgRating} • {deliveryTime} mins
              </p>
            </div>
            <div className="cus">
              <span id="cuis">{cuisines.join(", ")}</span>
              <span>{areaName}</span>
            </div>
          </div>
        </div>
        </div>
  );
}
