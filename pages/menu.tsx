import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainContainer } from "../components/main-container/main-container";
import { MenuSection } from "../components/menu/menu-section";
import { Title } from "../components/title";
import { menuData } from "../consts";

const Menu: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Smokey House</title>
      </Head>
      <div className="bg-[#040404] w-full flex items-center flex-col pt-32 px-5">
        <Image
          src="/image/phrase-menu.png"
          width="215"
          height="31"
          layout="fixed"
          objectFit="contain"
        />
        <div className="mb-14">
          <Title isSmall>Nuestro menú</Title>
        </div>
        <div className="flex flex-wrap max-w-3xl w-full justify-center gap-20 mb-10">
          {menuData.map((elem, index) => (
            <MenuSection key={index} {...elem} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Menu;
