import { Header } from "../haeder";

export const MainContainer: React.FC = ({ children }) => {
  return (
    <div
      className="grid grid-flow-row min-h-screen relative"
      style={{ gridTemplateRows: "1fr" }}
    >
      <Header />
      <div className="absolute inset-0" style={{ gridRow: "1 / -1" }}>
        {children}
      </div>
    </div>
  );
};
