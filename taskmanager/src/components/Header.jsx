export default function Header() {
  return (
    <div className=" p-4 fixed bg-white dark:bg-[#2b2c37] z-30 right-0">
      <header className="flex justify-between dark:text-white items-center">
        {/* left side */}
        <div>
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
}
