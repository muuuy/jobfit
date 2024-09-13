import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ListMenu } from "./ListMenu";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 grid-rows-3 grid-flow-col w-96 justift-center">
              <li className="row-span-3 border-2 border-black">
                <NavigationMenuLink asChild>
                  <Link to={"/"}>
                    <div className="mb-2 mt-4 text-lg font-black">jobfit</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A job matching platform that utilizes machine learning to
                      help you find opportunities.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListMenu href={"/login"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>TEST</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 grid-rows-3 grid-flow-col w-96 justift-center">
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
              <ListMenu href={"/"} title={"test"}>
                test test test
              </ListMenu>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Navigation };
