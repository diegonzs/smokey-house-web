interface MenuSectionProps {
  sectionTitle: string;
  food: {
    name: string;
    price: number;
    description: string;
  }[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  sectionTitle,
  food,
}) => {
  return (
    <section className="max-w-xs w-full">
      <h2
        className="text-[32px] text-primary font-bold mb-6 uppercase"
        style={{ fontFamily: "Oswald" }}
      >
        {sectionTitle}
      </h2>
      <ul>
        {food.map((elem, index) => (
          <li key={`${elem.name}-${index}`} className="mb-5">
            <div className="flex justify-between mb-2">
              <h3
                className="text-base text-primary font-bold uppercase"
                style={{ fontFamily: "Oswald" }}
              >
                {elem.name}
              </h3>
              <p
                className="text-base text-primary font-bold"
                style={{ fontFamily: "Oswald" }}
              >
                $ {elem.price}
              </p>
            </div>
            <p className="mb-5 text-white text-sm">{elem.description}</p>
            <div className="border border-[#EFE3B5] mb-0.5 opacity-20"></div>
            <div className="border border-[#EFE3B5] opacity-20"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};
