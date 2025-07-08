export const Header = () => {
  return (
    <>
      <header className="w-[1000px] h-15 flex items-center justify-between px-4 border border-gray-200 mx-auto rounded-full mt-4">
        <h1 className="text-2xl font-bold">My Study</h1>
        <img src="/menu.svg" alt="Menu" className="w-6 h-6 cursor-pointer" />
      </header>
    </>
  );
};
