import LandingPageWebsiteImage from "../../assets/landing_page_website.svg";
import { Button } from "../ui/button";

const IntroBanner = () => {
  return (
    <div className="flex-1 flex bg-custom-yellow p-20 justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-black text-7xl">JOBFIT</h1>
        <div className="flex flex-row gap-4 justify-center">
          <Button className="bg-custom-purple">
            <span className="font-black">LOGIN</span>
          </Button>
          <Button className="bg-custom-purple">
            <span className="font-black">SIGN UP</span>
          </Button>
        </div>
      </div>
      <img src={LandingPageWebsiteImage} className="w-1/2" />
    </div>
  );
};

export { IntroBanner };
