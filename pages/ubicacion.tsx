import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/button";
import { MainContainer } from "../components/main-container/main-container";
import { Title } from "../components/title";

const Ubicacion: NextPage = () => {
  return (
    <MainContainer>
      <div className="bg-[#040404] w-full pt-32 min-h-screen flex justify-center">
        <div className="max-w-7xl flex justify-between">
          <div className="flex flex-col">
            <Image
              src="/image/phrase-menu.png"
              width="215"
              height="31"
              layout="fixed"
              objectFit="contain"
            />
            <div className="mb-8">
              <Title isSmall isLeft>
                Encuéntranos
              </Title>
            </div>
            <p className="text-base text-[#AAAAAA] mb-8">
              Sector Plaza La República, Calle 79, entre avenida 3F y 3G.
            </p>
            <h2 className="text-primary font-bold uppercase mb-4">Horario</h2>
            <p className="text-white text-base mb-4">
              Mar - Jue: 11:00 am - 09:00 pm
            </p>
            <p className="text-white text-base mb-8">
              Sáb - Dom: 11:00 am - 10:00 pm
            </p>
            <p className="text-primary text-base">+58 412 123 4567</p>
            <p className="text-primary text-base">hola@smokeyhouse79.com</p>
            <div className="max-w-content mt-16">
              <Link href="/">
                <Button>Abrir Maps</Button>
              </Link>
            </div>
          </div>
          <Image
            src="/image/map.png"
            width="667"
            height="736"
            layout="fixed"
            objectFit="contain"
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default Ubicacion;
