import { Outlet } from 'react-router';
import { Header } from '@/components/common/Header';
import { SideMenu } from '@/components/common/SideMenu';
import { Container } from '@/components/common/Container';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* 100vh-92pxの92はHeaderの高さ */}
      <div className={'w-[1000px] flex mx-auto max-lg:w-auto max-lg:mx-4 h-[calc(100vh-92px)]'}>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};