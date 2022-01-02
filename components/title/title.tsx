import clsx from "clsx";

interface TitleProps {
  isSmall?: boolean;
  isLeft?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  children,
  isSmall = false,
  isLeft = false,
}) => {
  return (
    <h1
      className={clsx(
        "text-primary font-bold uppercase max-w-[906px]",
        isSmall ? "text-5xl" : "text-7xl",
        isLeft ? "text-left" : "text-center"
      )}
      style={{ lineHeight: "130%", fontFamily: "Oswald" }}
    >
      {children}
    </h1>
  );
};
