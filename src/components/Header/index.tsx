import { Outlet } from "react-router";

export const Header = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
    </>
  );
};
