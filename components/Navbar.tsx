const Navbar = () => (
  <nav className="w-full bg-white shadow flex items-center px-6 py-2 justify-between">
    <div className="flex items-center gap-4">
      <img src="/logo.png" alt="10 Minute School" className="h-8" />
      <a href="#" className="text-xs font-bold text-gray-700">কোর্স সমূহ</a>
      {/* Add more links as needed */}
    </div>
    <div>
      {/* Right section (login, language, cart, etc.) */}
      <button className="text-xs bg-green-500 text-white px-3 py-1 rounded ml-2">লগইন</button>
    </div>
  </nav>
);
export default Navbar;
