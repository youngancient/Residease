
import { SignupForm } from '@/components/auth/Auth';
import { DarkContainerStyle } from '@/styles/ComponentStyles/AuthStyles/AuthStyles';
import Head from 'next/head'
import Image from 'next/image'

const SignUp =() => {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DarkContainerStyle>
          <SignupForm />
        </DarkContainerStyle>
      </main>
    </>
  )
}

export default SignUp;