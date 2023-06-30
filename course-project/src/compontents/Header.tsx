const Header = () => {
  return (
    <header className="absolute top-[0px] left-[-70px] w-[1440px] h-[91px] overflow-hidden text-left text-base text-default-white font-heading-heading-3">
      <b className="absolute top-[36px] left-[175px]">Logo</b>
      <div className="absolute top-[36px] left-[898px] flex flex-row items-start justify-start gap-[107px]">
        <div className="relative">About</div>
        <div className="relative">Pricing</div>
        <div className="relative">Review</div>
      </div>
    </header>
  );
};

export default Header;
