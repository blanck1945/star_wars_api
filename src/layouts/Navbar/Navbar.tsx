import * as React from "react";
import "./navbar.scss";

interface NavbarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ show, setShow }: NavbarProps) => {
  return (
    <div className="navbar">
      <button
        className={show ? "nav_btn active" : "nav_btn"}
        onClick={() => setShow(!show)}
      >
        Planet
      </button>
      <button
        className={show ? "nav_btn" : "nav_btn active"}
        onClick={() => setShow(!show)}
      >
        People
      </button>
    </div>
  );
};

export default Navbar;
