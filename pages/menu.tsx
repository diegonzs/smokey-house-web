import { useWindowSize } from "hooks/window-size";
import { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../components/main-container/main-container";
import { MenuSection } from "../components/menu/menu-section";
import { Title } from "../components/title";
import { menuData } from "../consts";

const Menu: NextPage = () => {
  const size = useWindowSize();
  return (
    <MainContainer>
      <Head>
        <title>Smokey House</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-[#040404] w-full flex items-center flex-col pt-32 px-5">
        <div className="mb-14">
          <Title isSmall>Nuestro menú</Title>
        </div>
        <div className="flex flex-wrap max-w-3xl w-full justify-center gap-20 mb-20">
          {size.width && size.width > 768 ? (
            <>
              <div className="flex flex-col gap-10">
                {menuData
                  .filter((_elem, index) => index % 2 === 0)
                  .map((elem, index) => (
                    <MenuSection key={index} {...elem} />
                  ))}
              </div>
              <div className="flex flex-col gap-10">
                {menuData
                  .filter((_elem, index) => index % 2 !== 0)
                  .map((elem, index) => (
                    <MenuSection key={index} {...elem} />
                  ))}
              </div>
            </>
          ) : (
            <>
              {menuData.map((elem, index) => (
                <MenuSection key={index} {...elem} />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="fixed bottom-6 right-8 w-16 h-16 cursor-pointer">
        <a href="https://wa.me/584124687370" target="_blank" rel="noreferrer">
          <img src="/image/ws.png" alt="whatsapp" />
        </a>
      </div>
    </MainContainer>
  );
};

// https://wa.me/584124687370

export default Menu;
