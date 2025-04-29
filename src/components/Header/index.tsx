import { Outlet } from "react-router";
import "./style.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">REACT UPDATE</h1>
      </header>
      <Outlet />
    </>
  );
};
