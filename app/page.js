import Image from "next/image";
import HomeHeader from "./Components/HomeHeader/page";
import HomeSearchBar from "./Components/HomeSearch/HomeSearchBar";

export default function Home() {
  return (
    <>
       <HomeHeader />
       <div className="flex flex-col items-center mt-36">
          <Image
            height={300}
            width={300}
            src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"}
          />
          <HomeSearchBar />
       </div>
    </>
  )
}
