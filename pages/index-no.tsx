import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { MainContainer } from "../components/main-container/main-container";
import { Title } from "../components/title";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/bg-home.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="z-10 w-full flex flex-col h-screem items-center justify-center relative">
          <Image
            src="/image/phrase-home.png"
            width="120"
            height="48"
            layout="fixed"
            objectFit="contain"
          />
          <Title>Sabores y experiencias involvidables</Title>
          <p className="text-white text-base font-normal mt-8 mb-8 max-w-md text-center">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <Link href="/menu">
            <a className="py-3 px-8 bg-primary text-[#0C0B08] text-base">
              Explorar Menu
            </a>
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
