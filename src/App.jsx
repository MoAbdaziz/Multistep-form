
// Components

import SideBar from "./routes/SideBar";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Routes

// Redux

import Routes from "./routes/index"
export default function App() {

 

 

  return (
    <div className="flex w-full h-screen bg-[#D6D9E6] items-center justyify-center">
      <div className="bg-white w-[100%] md:w-[95%] h-[80%]  rounded xl:h-[80%] xl:w-[60%] pl-2 m-auto ">

     <Routes />
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        closeButton={true}
        rtl={false}
        pauseOnHover
        theme="dark"
      />
      </div>
    </div>
  );
}
