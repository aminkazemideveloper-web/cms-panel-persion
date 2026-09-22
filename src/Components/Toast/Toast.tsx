import { useSelector } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import type { RootState } from "../../Redux/store";

function Toast() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <ToastContainer
      position="top-left"
      autoClose={2000}
      limit={5}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Slide}
    />
  );
}

export default Toast;
