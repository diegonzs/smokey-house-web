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
        description:
          "Carne de la casa, pan de hamburguesa, queso Cebu, papas rayadas",
        price: 1.75,
      },
      {
        name: "Especial de carne",
        description:
          "Doble carne de la casa (160gr), pan wooper, doble queso cebu, tocineta, jamon, queso amarillo, servicio de papas importadas",
        price: 6,
      },
      {
        name: "Pollo crispy",
        description:
          "Pollo crispy de la casa, pan wooper, queso cebu, tocineta, jamon, doble queso amarillo, servicio de papas importadas",
        price: 6.5,
      },
      {
        name: "Especial de pollo",
        description:
          "Pollo de la casa, pan wooper, doble queso cebu, tocineta, jamon, queso amarillo, servicio de papas importadas",
        price: 7,
      },
      {
        name: "Hamburguesa de la casa",
        description:
          "Punta trasera, pan wooper, full queso cebu, tocineta, jamon ahumado, doble queso amarillo, servicio de papas importadas",
        price: 7,
      },
    ],
  },
  {
    sectionTitle: "Perros",
    food: [
      {
        name: "Perros de la casa",
        description:
          "Salchica polacas, pan de perro caliente, queso cheddar, tocineta, pepinillos, papas importadas",
        price: 5,
      },
      {
        name: "Salchiqueso",
        description:
          "Salchicha polaca, queso cebu, pepinillos, pan de perro caliente",
        price: 3,
      },
    ],
  },
  {
    sectionTitle: "Pizzas",
    food: [
      {
        name: "Pizza de la casa",
        description:
          "Salsa roja de la casa, Pepperoni, tocineta, salchichon y jamon ahumado",
        price: 13,
      },
    ],
  },
  {
    sectionTitle: "Combos",
    food: [
      {
        name: "Combo House",
        description: "5 hamburguesas mas balde de 10 cervezas",
        price: 17.5,
      },
    ],
  },
  {
    sectionTitle: "Parrillas",
    food: [
      {
        name: "Parrilla mixta",
        description:
          "Parrilla mixta para dos personas con pollo asado, Punta trasera, chorizo ahumado, servicio de arepas, ensalada coleslaw, queso",
        price: 6,
      },
      {
        name: "Parrilla de carne",
        description:
          "Parrilla de carne para una person con punta trasera, chorizo ahumado, servicio de arepas, ensalada coleslaw, queso y servico de papas especiales",
        price: 5,
      },
      {
        name: "Parrilla de pollo",
        description:
          "Parrilla de pollo para una person con pollo asado, chorizo ahumado, servicio de arepas, ensalada coleslaw, queso y servico de papas especiales",
        price: 5,
      },
    ],
  },
  {
    sectionTitle: "Bebidas",
    food: [
      {
        name: "Cocacola 1.5L",
        description: "",
        price: 1.5,
      },
      {
        name: "Cocacola 350ml",
        description: "",
        price: 0.75,
      },
      {
        name: "Cerveza",
        description: "",
        price: 1,
      },
      {
        name: "Agua mineral",
        description: "",
        price: 0.6,
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
