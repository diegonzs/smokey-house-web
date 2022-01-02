// import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-black h-20 z-20 flex justify-center">
      <div className="max-w-[1680px] flex w-full justify-center">
        <img src="/brand/logo.svg" alt="Logo" className="px-2 py-2" />
        {/* <div
          className="flex justify-center w-full items-center"
          style={{ gridColumn: "1 / -1", justifySelf: "center" }}
        >
          <nav>
            <ul className="grid gap-8 grid-flow-col">
              <li>
                <Link href="/">
                  <a className="text-white text-base">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a className="text-white text-base">Menú</a>
                </Link>
              </li>
              <li>
                <Link href="/ubicacion">
                  <a className="text-white text-base">Ubicación</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* <div className="h-full flex items-center">
          <Link href="/menu">
            <a className="text-white text-base mr-5">Menú</a>
          </Link>
        </div> */}
      </div>
    </header>
  );
};
