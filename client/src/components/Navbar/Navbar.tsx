import { Navigation } from "./Navigation";
import clsx from "clsx";
import LogoImage from "../../assets/logo-image-small.png";

const Navbar = () => {
  return (
    <div
      className={clsx(
        "w-full h-16 border-b-2 border-slate",
        "flex flex-row justify-center items-center px-12 relative"
      )}
    >
      <div className="absolute left-12">
        <img src={LogoImage} />
      </div>
      <Navigation />
    </div>
  );
};

export { Navbar };
