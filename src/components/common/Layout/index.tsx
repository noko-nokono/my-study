import { Outlet } from 'react-router';
import { Header } from '@/components/common/Header';
import { SideMenu } from '@/components/common/SideMenu';
import { Container } from '@/components/common/Container';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className='w-[1000px] flex mx-auto mt-4 max-lg:w-auto max-lg:mx-4'>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};