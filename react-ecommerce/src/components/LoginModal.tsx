import { FC, FormEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { doLogin, updateModal } from "../redux/features/authSlice";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AuthServices } from "../services/AuthServices";

const LoginModal: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.authReducer.modalOpen);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginService = new AuthServices();
    const response = await loginService.login(username, password);

    if (response) {
      dispatch(doLogin({ username, token: response!.access_token }));
      window.location.reload();
    }
  };

  if (open) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
        <div
          className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40"
          data-test="login-container"
        >
          <RxCross1
            className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
            onClick={() => dispatch(updateModal(false))}
          />
          <>
            <div className="flex mb-2 space-x-2 justify-center items-center">
              <h3 className="font-bold text-center text-2xl">Login</h3>
            </div>
            <form onSubmit={submitForm} className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  data-test="input-username"
                  type="text"
                  placeholder="Email"
                  className="border w-full border-black py-2 px-8 rounded"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <RiUser3Fill className="absolute top-3 left-2 text-lg" />
              </div>
              <div className="relative">
                <input
                  data-test="input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Senha"
                  className="border w-full border-black py-2 px-8 rounded"
                />
                <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
              </div>
              <input
                data-test="input-submit"
                type="submit"
                value="Entrar"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
              />
            </form>
          </>
        </div>
      </div>
    );
  }
};

export default LoginModal;
