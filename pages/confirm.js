/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import Link from "next/link";
import RideSelector from "./components/RideSelector";

function Confirm() {
  // To Save getPickUpCoordinates
  // To Save getDropOffCoordinates

  const router = useRouter();
  const { pickup, dropoff } = router.query;
  // console.log('pickup', pickup);
  // console.log('dropoff', dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickUpCoordinates = (pickup) => {
    // const Pickup = 'Santa Monica';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center); // get coordinates from features arr
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    // const DropOff = 'Los Angeles';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center); // get coordinates from features arr
        // console.log(data.features[0].center); // get coordinates from features arr
      });
  };
  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Link href="/search">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContaienr>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContaienr>
      </RideContainer>
    </Wrapper>
  );
}

export default Confirm;

const Wrapper = tw.div`flex flex-col flex-1 h-screen`;
const BackButton = tw.img`h-12 absolute z-20 top-2 left-4 bg-white rounded-full cursor-pointer`;
const RideContainer = tw.div`flex-1 h-1/2 flex flex-col`;
const ConfirmButtonContaienr = tw.div``;
const ConfirmButton = tw.button` w-full bg-black text-white text-center text-2xl my-4 py-4 rounded-full hover:bg-gray-900 transition`;
