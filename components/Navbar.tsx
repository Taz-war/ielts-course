const Navbar = ({ children }: { children: any }) => (
  <nav className="w-full bg-white shadow flex items-center px-6 py-3 justify-between">
    <div className="flex items-center gap-4">
      <img src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="10 Minute School" className="h-8" />
      <a href="#" className="text-sm font-bold text-gray-700 hover:text-green-600 transition">কোর্স সমূহ</a>
      
    </div>
    <div className="flex items-center gap-2">
      {children}
    </div>
  </nav>
);

export default Navbar;
