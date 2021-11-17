import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

function Login() {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])


    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
            <Title>Login to access your account</Title>
            <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            <SignInButton onClick={() => signInWithPopup(auth, provider)} >Sign in with Google <GoogleLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" /></SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen p-4 bg-gray-200
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain w-full
`
const SignInButton = tw.button`
flex justify-center  items-center bg-black text-white text-2xl w-full py-4 mt-8 self-center hover:bg-gray-900 transition rounded-full
`
const GoogleLogo = tw.img`
h-9 ml-4
`

