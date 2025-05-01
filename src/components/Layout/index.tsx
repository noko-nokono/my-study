import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { SideMenu } from '@/components/SideMenu';
import { Container } from '@/components/Container';
import './style.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className='layout'>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};