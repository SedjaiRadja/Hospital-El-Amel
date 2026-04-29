import logo from "../assets/logo.jpg";
function NavBar() {
  return (
    <nav className="relative px-6 py-5 bg-white bg-opacity-80 backdrop-blur-sm shadow-md flex items-center justify-between">
      <div>
        <img src={logo} alt="Hospital Logo" className="h-40 w-auto" />
      </div>
      <div></div>
    </nav>
  );
}
export default NavBar;
