import React from "react";
import { Link } from "react-router-dom";
// import useDarkMode from "@/hooks/useDarkMode";

import MainLogo from "@/assets/images/logo/diu_logo.png";
import LogoWhite from "@/assets/images/logo/diu_logo.png";
const MobileLogo = () => {
  const [isDark] = useDarkMode();
  return (
    <Link to="/">
      <img src={isDark ? LogoWhite : MainLogo} alt="" />
    </Link>
  );
};

export default MobileLogo;
