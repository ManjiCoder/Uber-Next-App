
import { Component, useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuamkyMSIsImEiOiJja3QwNG16bXUxeDM2MnBwdWoyMnY4am9qIn0.AGU9ohR8IlKK2wCPtK7NSA';

const map = () => {
    // useEffect(()=>{
    //   console.log("hello");
    // },[])

    // What are Components? Reusable ui element
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
        })
    })
    return (
        <Wrapper id="map">
        </Wrapper>
    )
}

export default map

const Wrapper = tw.div`
flex-1`
