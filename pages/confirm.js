import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

function Confirm() {

    // To Save getPickUpCoordinates 
    // To Save getDropOffCoordinates 

    const router = useRouter()
    const { pickup, dropoff } = router.query
    console.log('pickup', pickup);
    console.log('dropoff', dropoff);

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickUpCoordinates = (pickup) => {
        // const Pickup = 'Santa Monica';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA",
                limit: 1,
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center); // get coordinates from features arr
                // console.log(data.features[0].center); // get coordinates from features arr
            })
    }

    const getDropOffCoordinates = (dropoff) => {
        // const DropOff = 'Los Angeles';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA",
                limit: 1,
            })
        )
            .then(response => response.json())
            .then(data => {
                // console.log(data.features[0].center); // get coordinates from features arr
                setDropoffCoordinates(data.features[0].center); // get coordinates from features arr
            })
    }
    useEffect(() => {
        getPickUpCoordinates(pickup)
        getDropOffCoordinates(dropoff)
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                {/* {pickupCoordinates}
                {dropoffCoordinates} */}
                <RideSelector />
                <ConfirmButtonContaienr>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContaienr>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`flex flex-col flex-1 h-screen`
const RideContainer = tw.div`flex-1 h-1/2 flex flex-col`
const ConfirmButtonContaienr = tw.div``
const ConfirmButton = tw.div`bg-black text-white text-center text-xl m-4 py-4 rounded-full`
