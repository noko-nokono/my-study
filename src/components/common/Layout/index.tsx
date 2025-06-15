import { Outlet } from 'react-router';
import { Header } from '@/components/common/Header';
import { SideMenu } from '@/components/common/SideMenu';
import { Container } from '@/components/common/Container';
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