import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


const HouseDetail =() => {
    const { user } = useAppSelector(userSelector);
    const router = useRouter();
    useEffect(() => {
      if (user === null) {
        router.push("/");
      }
    }, []);

    return (
      <>
        <Head>
          <title>Dashboard | Available Units</title>
          <meta name="description" content="Rentease is a platform which makes renting and buying houses seamless" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          House details here
        </main>
      </>
    )
  }
  
  export default HouseDetail;