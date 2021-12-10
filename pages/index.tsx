import { NextPage } from "next";
import Image from "next/image";
import { MainContainer } from "../components/main-container/main-container";
import { MenuSection } from "../components/menu/menu-section";
import { Title } from "../components/title";

const menuData = [
  {
    sectionTitle: "Entradas",
    food: [
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
    ],
  },
  {
    sectionTitle: "Hamburguesas",
    food: [
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
    ],
  },
  {
    sectionTitle: "Hot dogs",
    food: [
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
    ],
  },
  {
    sectionTitle: "Ensaladas",
    food: [
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
      {
        name: "tequeños",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
        price: 18,
      },
    ],
  },
];

const Menu: NextPage = () => {
  return (
    <MainContainer>
      <div className="bg-[#040404] w-full flex items-center flex-col pt-32">
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
        <div className="flex flex-wrap max-w-3xl w-full justify-between">
          {menuData.map((elem, index) => (
            <MenuSection key={index} {...elem} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Menu;
