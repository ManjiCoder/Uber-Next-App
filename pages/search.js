import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
function Search() {
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/'>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FormToIcon>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                    <Line src='https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png' />
                    <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
                </FormToIcon>
                <InputBoxes>
                    <Input placeholder='Enter Pickup Location' />
                    <Input placeholder='Where To?' />
                </InputBoxes>
                <PlusIcon src='https://img.icons8.com/50/000000/plus-math.png' />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                Saved Places
            </SavedPlaces>
            <Link href='/'>
            <ConfirmButton>Confirm Locations</ConfirmButton>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
h-screen bg-gray-200
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`h-12 cursor-pointer`
const InputContainer = tw.div`
bg-white flex items-center px-4 pb-2 
`
const FormToIcon = tw.div`
flex flex-col mr-2 items-center
`
const Circle = tw.img`h-2.5`
const Line = tw.img`h-10`
const Square = tw.img`h-3`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 p-2 rounded-2 outline-none border-none
`
const PlusIcon = tw.img`h-10 w-10 bg-gray-200 rounded-full ml-3`
const SavedPlaces = tw.div`flex items-center bg-white px-4 p-2 my-3`
const StarIcon = tw.img`h-10 w-10 bg-gray-400 p-2 mr-2 rounded-full`
const ConfirmButton = tw.div`bg-black text-white p-3 text-center text-2xl rounded-full mx-20 cursor-pointer hover:bg-gray-700 transition`