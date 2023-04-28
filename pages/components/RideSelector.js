/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import React from 'react'
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration form MAPBOX API
  // 1. pickupCoordinates
  // 2. dropoffCoordinates

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[(0, 0)]?.duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImgage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5min away</Time>
            </CarDetails>
            <Price>{(rideDuration * car.multiplier).toFixed(2) + " Rs"}</Price>
            {/* <Price>$21.00</Price> */}
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector;

const Wrapper = tw.div`flex-1 flex flex-col overflow-y-scroll`;
const Title = tw.div` text-gray-500 text-center text-xs py-2 border-b`;
const CarList = tw.div`overflow-y-scroll`;
const Car = tw.div`flex p-4 items-center`;
const CarImgage = tw.img`h-14 mr-4`;
const CarDetails = tw.div`flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div`text-ms`;
