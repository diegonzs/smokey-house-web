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
        description: "Servicio de 5 tequeños y salsa de la casa",
        price: 3,
      },
      {
        name: "Papas especiales",
        description:
          "Papas fritas importadas (300gr) con queso cheddar y tocineta",
        price: 2.5,
      },
    ],
  },
  {
    sectionTitle: "Hamburguesas",
    food: [
      {
        name: "Clasica",
        description: "Carne de la casa, pan wooper, queso Cebu, papas rayadas",
        price: 1.75,
      },
      {
        name: "Especial de carne",
        description:
          "Doble carne de la casa (160gr), pan wooper, doble queso cebu, tocineta, jamon, queso amarillo, servicio de papas importadas",
        price: 6,
      },
      {
        name: "Especial de pollo",
        description:
          "Pollo de la casa, pan wooper, doble queso cebu, tocineta, jamon, queso amarillo, servicio de papas importadas",
        price: 7,
      },
      {
        name: "Pollo crispy",
        description:
          "Pollo crispy de la casa, pan wooper, queso cebu, tocineta, jamon, doble queso amarillo, servicio de papas importadas",
        price: 6.5,
      },
    ],
  },
  // {
  //   sectionTitle: "Hot dogs",
  //   food: [
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //   ],
  // },
  // {
  //   sectionTitle: "Ensaladas",
  //   food: [
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //     {
  //       name: "tequeños",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur.",
  //       price: 18,
  //     },
  //   ],
  // },
];

const Menu: NextPage = () => {
  return (
    <MainContainer>
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
        <div className="flex flex-wrap max-w-3xl w-full justify-center gap-20">
          {menuData.map((elem, index) => (
            <MenuSection key={index} {...elem} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Menu;
