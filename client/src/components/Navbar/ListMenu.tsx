import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ListMenuData } from "./NavbarInterface";

const ListMenu: React.FC<ListMenuData> = ({ href, title, children }) => {
  return (
    <li className="border-2 border-black">
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none"
        >
          <div className="font-bold leading-none">{title}</div>
          <p className="text-sm line-clamp-2 leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export { ListMenu };
