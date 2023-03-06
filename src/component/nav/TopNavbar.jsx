import React from "react";
import logo from 'C:/Users/82104/Desktop/ToyProject/exam/src/main/reactfront/src/images/QReadyYak.png'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="App">
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img alt="logo" src={logo} className="h-auto max-w-xs" />
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900">
              Speedometer
            </div>
            <div className="mr-5 hover:text-gray-900">
              Graph
            </div>
            <div className="mr-5 hover:text-gray-900">
              Chart
            </div>
          </nav>
        </div>
      </header>
      </div>
    </>
    // <>
    //   <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-orange-300">
    //     <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //       <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //         <a
    //           className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
    //           href="#pablo"
    //         >
    //           Nav
    //         </a>
    //         <button
    //           className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //           type="button"
    //           onClick={() => setNavbarOpen(!navbarOpen)}
    //         >
    //           <i className="fas fa-bars"></i>
    //         </button>
    //       </div>
    //       <div
    //         className={
    //           "lg:flex flex-grow items-center" +
    //           (navbarOpen ? " flex" : " hidden")
    //         }
    //         id="example-navbar-danger"
    //       >
    //         <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a
    //               className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //               href="#pablo"
    //             >
    //               <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}