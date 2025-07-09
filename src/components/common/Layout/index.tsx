import { Outlet } from 'react-router';
import { Header } from '@/components/common/Header';
import { SideMenu } from '@/components/common/SideMenu';
import { Container } from '@/components/common/Container';

const HEADER_HEIGHT = 92;

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={`w-[1000px] flex mx-auto max-lg:w-auto max-lg:mx-4 h-[calc(100vh-${HEADER_HEIGHT}px)]`}>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};