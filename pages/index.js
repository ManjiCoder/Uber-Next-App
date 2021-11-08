import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import Search from './Search'
export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
            <UberLogo src='https://i.ibb.co/84stgjq/uber-texhnologies-new-20218114.jpg' />
          <Profile>
            <Name>Rafeh Qazi</Name>
            <UserImage src='https://lh3.googleusercontent.com/a-/AOh14GiD9MBH2IcIdXX8uw40dBSdCkjbAbabGqJPsXaE=s96-c' />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
              Ride
            </ActionButton>
          </Link>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
              Ride
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper >
  )
}

const Wrapper = tw.div`
flex flex-col bg-blue-200 h-screen
`

const ActionItems = tw.div`
bg-white flex-1 px-5
`
const Header = tw.div`
flex justify-between items-center 
`
const UberLogo = tw.img`
h-28 
`
const Profile = tw.div`flex`
const Name = tw.div`mr-4 w-20 tx-sm  flex items-center`
const UserImage = tw.img`
h-12 w12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`flex cursor-pointer`
const ActionButton = tw.div`
bg-gray-200 flex flex-col flex-1 m-1 h-32 justify-center items-center rounded-lg transform hover:scale-105 transition text-ul 
`
const ActionButtonImage = tw.img`
h-3/5 
`
const InputButton = tw.div`
h-20 bg-gray-200 text-xl p-4 flex items-center my-4
`