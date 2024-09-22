import Icon from "@/components/ui/Icon";
import { logOut } from '@/store/api/auth/authSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Header = ({ className = "custom-class" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { amount } = useSelector((state) => state.amount);


  const handleLogout = () => {
    // Clear user data from local storage
    dispatch(logOut());
    navigate('/login');
  };
  const handleAddAmount = () => {
    navigate("/user/amount");
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedAuth = localStorage.getItem('user');
        if (!storedAuth) {
          throw new Error('User is not authenticated');
        }

        const auth = JSON.parse(storedAuth);
        const accessToken = auth?.auth?.accessToken;

        const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/auth/user`, {
          method: 'GET',
          headers: {
            'Authorization': `${accessToken}`, // Proper Authorization header format
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setUser(result.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className={"floating top-0"}>
      <div
        className={` app-header md:px-6 px-[15px]  dark:bg-slate-800 shadow-base dark:shadow-base3 bg-white
        border border-slate-200 dark:border-slate-700
             md:py-4 py-3
        `}
      >
        <div className="flex justify-between items-center h-full">
          <div></div>

          <div className="nav-tools flex items-center lg:space-x-6 space-x-3 rtl:space-x-reverse">

              <span className="border p-2 ring-amber-100" onClick={handleAddAmount}><p>Amount: ${amount || 0}</p></span>
            <div
              onClick={handleLogout}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className="flex items-center">
                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                    <Icon icon={'heroicons-outline:login'} />
                  </span>
                  <span className="block text-sm">Log Out</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
