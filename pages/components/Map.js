
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA';

const Map = (props) => {
   
    // What are Components? Reusable ui element
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            // center: [-99.29011, 39.39172], //    USA
            center: [78.476681027237, 22.1991660760527], //   INDIA
            zoom: 3,
        })
        
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }
        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.pickupCoordinates, 
                props.dropoffCoordinates
            ],{
                padding:60
            })
        }
    },[props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            // .setLngLat([-99.29011, 39.39172])
            .addTo(map);
    }

    // useEffect(()=>{
    //     console.log(props.pickupCoordinates);
    //     console.log(props.dropoffCoordinates);
    // },[])
    return (
        <Wrapper id="map">
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2`
