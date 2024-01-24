import React, { useState, useEffect } from "react";
import Resto from "./Resto";
import Shimmer from "./Shimmer";

export default function Restaurent() {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [filteredRestautent, setFilteredRestautent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurent.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestautent(filteredList);
  };

  // const handleSearch = () => {
  //   const filteredList = listOfRestaurent.filter((res) =>
  //     res.info.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setFilteredRestautent(filteredList);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8563032&lng=74.83609179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      const restaurantData =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setlistOfRestaurent(restaurantData);
      setFilteredRestautent(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <>  
    <div className="hotels">
      <p>Restaurants with online food delivery in Mangaluru</p>
      <div class="filters">
        <span>
          Filter <i class="fa-solid fa-sliders"></i>{" "}
        </span>
        <span>Sort By</span>
        <span id="long2">Fast Delivery</span>
        <span id="long2">New on Swiggy</span>
        <span>Rating 4.0+</span>
        <span>Pure Veg</span>
        <span>Offers</span>
        <span id="long3">Rs. 300-Rs. 600</span>
        </div>
        
      <div className="btn">
        {/* <div className="search">
          <input
            type="text"
            className="input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button id="btn" onClick={filterTopRestaurants}>
          Top Restaurants
        </button> */}
      </div>
      <div className="ress">
        {filteredRestautent.map((restaurant) => (
          <Resto key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      </div>
    </>
  );
}
