// eslint-disable-next-line react/prop-types
function Header({ links }) {
  return (
    <header className="flex items-center justify-center lg:gap-44 xl:gap-96 rounded-b-3xl bg_header fixed top-0 w-full h-14">
      <h1 className="text-4xl pb-1 text-white  ">M&V MODAS</h1>
      {links}
    </header>
  );
}

export default Header;
