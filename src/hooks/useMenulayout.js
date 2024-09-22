import { handleType } from "@/store/amount";
import { useDispatch, useSelector } from "react-redux";

const useMenuLayout = () => {
  const dispatch = useDispatch();
  const menuType = useSelector((state) => state.layout.type);

  const setMenuLayout = (value) => {
    dispatch(handleType(value));
  };

  return [menuType, setMenuLayout];
};

export default useMenuLayout;
