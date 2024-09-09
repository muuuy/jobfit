import clsx from "clsx";
import LogoImage from "../../assets/logo-image-small.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  return (
    <div
      className={clsx(
        "w-full h-16 border-b-2 border-slate",
        "flex flex-row justify-between items-center px-12 relative"
      )}
    >
      <div>
        <img src={LogoImage} />
      </div>
      <div className={clsx("flex flex-row gap-4", "absolute right-12")}>
        <ul className="font-black">dropdown1</ul>
        <div className="font-black relative">
          dropdown2
          <ul className="absolute">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-black">USER</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-1 border-2 border-black rounded-lg">
            <DropdownMenuLabel className="border-b-2">My Account</DropdownMenuLabel>
            <DropdownMenuItem>LOGIN</DropdownMenuItem>
            <DropdownMenuItem>SIGNUP</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { Navbar };
