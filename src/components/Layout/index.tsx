import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { SideMenu } from '@/components/SideMenu';
import './style.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className='layout'>
        <SideMenu />
        <Outlet />
      </div>
    </>
  );
};