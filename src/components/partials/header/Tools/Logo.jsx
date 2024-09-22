// import useDarkMode from "@/hooks/useDarkMode";
// import useWidth from "@/hooks/useWidth";
import { Link } from "react-router-dom";

import MobileLogoWhite from "@/assets/images/logo/diu_logo.png";
import MobileLogo from "@/assets/images/logo/diu_logo.png";
import LogoWhite from "@/assets/images/logo/diu_logo.png";
import MainLogo from "@/assets/images/logo/diu_logo.png";
const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div  className=" ">
      <Link to="/">
        {width >= breakpoints.xl ? (
          <img src={isDark ? LogoWhite : MainLogo} alt=""  className="w-10 h-10" />
        ) : (
          <img src={isDark ? MobileLogoWhite : MobileLogo} alt="" className="w-12 h-13" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
