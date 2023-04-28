/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

function Search() {
  const [pickUp, setpickUp] = useState("");
  const [dropOff, setdropOff] = useState("");
  const navigate = useRouter();
  // console.log(pickUp);
  // console.log(dropOff);
  const handleSearch = (e) => {
    e.preventDefault();
    navigate.push({
      pathname: "/confirm",
      query: {
        pickup: pickUp,
        dropoff: dropOff,
      },
    });
  };
  return (
    <FormWrapper onSubmit={handleSearch}>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FormToIcon>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FormToIcon>
        <InputBoxes>
          <Input
            placeholder="Enter Pickup Location"
            value={pickUp}
            onChange={(e) => setpickUp(e.target.value)}
          />
          <Input
            placeholder="Where To?"
            value={dropOff}
            onChange={(e) => setdropOff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <ConfirmButtonContaienr>
        <ConfirmButton
          type="submit"
          disabled={pickUp.length === 0 && dropOff.length === 0}
        >
          Confirm Location
        </ConfirmButton>
      </ConfirmButtonContaienr>
    </FormWrapper>
  );
}

export default Search;

const FormWrapper = tw.form`
h-screen bg-gray-200
`;
const ButtonContainer = tw.div`
bg-white px-4 pt-2 
`;
const BackButton = tw.img`h-12 cursor-pointer`;
const InputContainer = tw.div`
bg-white flex items-center px-4  
`;
const FormToIcon = tw.div`
flex flex-col mr-2 items-center
`;
const Circle = tw.img`h-2.5`;
const Line = tw.img`h-10`;
const Square = tw.img`h-3`;
const InputBoxes = tw.div`
flex flex-col flex-1
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 p-2 rounded-2 outline-none border-none
capitalize
`;
const PlusIcon = tw.img`h-10 w-10 bg-gray-200 rounded-full ml-3`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 p-2 my-3`;
const StarIcon = tw.img`h-10 w-10 bg-gray-400 p-2 mr-2 rounded-full`;
const ConfirmButtonContaienr = tw.div``;
const ConfirmButton = tw.button`w-full bg-black text-white p-3 text-center text-2xl rounded-full cursor-pointer hover:bg-gray-900 transition`;
