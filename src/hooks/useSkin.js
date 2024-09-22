// import { handleSkin } from "@/store/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSkin = () => {
  const dispatch = useDispatch();
  const setSkin = (mod) => dispatch(handleSkin(mod));


  return [ setSkin];
};

export default useSkin;
