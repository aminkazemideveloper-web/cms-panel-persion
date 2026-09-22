
import { Slide, ToastContainer } from "react-toastify";

function Toast() {
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
      theme="light"
      transition={Slide}
    />
  );
}

export default Toast;
