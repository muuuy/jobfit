import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ListMenu } from "./ListMenu";
import clsx from "clsx";
import LogoImage from "../../assets/logo-image-small.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to={"/"}>
                      <div className="mb-2 mt-4 text-lg font-black">jobfit</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A job matching platform that utilizes machine learning
                        to help you find opportunities.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListMenu href={"/"} title={"test"}>
                  test  test  test
                </ListMenu>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export { Navbar };
