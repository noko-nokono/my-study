import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { SideMenu } from '@/components/SideMenu';

export const Layout = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <Outlet />
    </>
  );
};