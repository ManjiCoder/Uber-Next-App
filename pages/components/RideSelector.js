import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

function RideSelector() {
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
                        <Price>$21.00</Price>
                    </Car>
                ))}

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`flex-1 flex flex-col overflow-y-scroll`
const Title = tw.div` text-gray-500 text-center text-xs py-2 border-b`
const CarList = tw.div`overflow-y-scroll`
const Car = tw.div`flex p-4 items-center`
const CarImgage = tw.img`h-14 mr-4`
const CarDetails = tw.div`flex-1`
const Service = tw.div`font-medium`
const Time = tw.div`text-xs text-blue-500`
const Price = tw.div`text-ms`

