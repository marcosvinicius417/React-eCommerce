import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.authReducer.username);

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold" data-test="main-logo">
            React eCommerce
          </Link>

          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Produtos
            </Link>

            {username !== "" ? (
              <Link
                to="/registerProduct"
                className="text-xl font-bold"
                data-test="main-products"
              >
                Cadastrar Produto
              </Link>
            ) : (
              <span
                className="text-xl font-bold"
                data-test="main-products"
                onClick={() => dispatch(updateModal(true))}
              >
                Cadastrar Produtos
              </span>
            )}

            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-gray-500 text-2xl" />
              )}
              <div className="text-gray-500 text-2xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Login
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
