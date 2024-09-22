import { handleSemiDarkMode } from "@/store/amount";
import { useDispatch, useSelector } from "react-redux";

const useSemiDark = () => {
  const dispatch = useDispatch();
  const isSemiDark = useSelector((state) => state.layout.semiDarkMode);

  const setSemiDark = (val) => dispatch(handleSemiDarkMode(val));

  return [isSemiDark, setSemiDark];
};

export default useSemiDark;
