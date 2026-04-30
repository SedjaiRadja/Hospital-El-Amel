import header from "../assets/header.jpg";
function Header() {
  return (
    <div className="relative">
      <img
        src={header}
        alt="Hospital Header"
        className="w-full h-auto object-cover rounded-lg shadow-md lg:h-[800px]"
      />

      {/* overlay من اليسار لليمين */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-black/20 to-transparent rounded-lg"></div>
    </div>
  );
}
export default Header;
