
import { AllListing } from '@/components/dashboard/AllListing';
import { Favourite } from '@/components/dashboard/Favourite';
import Head from 'next/head'
import Image from 'next/image'

const AvailableUnits =() => {
  return (
    <>
      <Head>
        <title>Dashboard | Available Units</title>
        <meta name="description" content="Rentease is a platform which makes renting and buying houses seamless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Favourite />
        <AllListing />
      </main>
    </>
  )
}

export default AvailableUnits;