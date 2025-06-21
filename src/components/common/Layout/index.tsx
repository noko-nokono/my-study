import { Outlet } from 'react-router';
import { Header } from '@/components/common/Header';
import { SideMenu } from '@/components/common/SideMenu';
import { Container } from '@/components/common/Container';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};