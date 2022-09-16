import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex item-center text-gray-800">
          <span className="text-3xl text-indigo-600">
            <ion-icon name="logo-react"></ion-icon>
          </span>
          <Link to="/">
            <h1>React MySQL</h1>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${
            open ? "top-30" : "top-[-490px]"
          } `}
        >
          <div className="md:my-0 my-7">
            <Button>
              <Link to="/">
                Home
              </Link>
            </Button>
          </div>

          <div className="md:my-0 my-7">
            <Button>
              <Link to="/new">
                Create Task
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
