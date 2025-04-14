import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Explore', 'Help', 'Profile'];

  return (
    <nav className="w-full flex justify-center bg-white text-[#84BD00] p-4" aria-label="Main navigation">
      
          {/* Desktop Navigation with Borders */}
          <div className="hidden max-w-[725px] md:flex items-center justify-center flex-grow space-x-4 border-t border-b border-[#D9D9D9] py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white transition-colors duration-200"
                aria-current={item === 'Home' ? 'page' : undefined}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#84BD00]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        {/* Bottom Border Line */}
        <div className="border-[#D9D9D9] mt-4"></div>

        {/* Mobile Navigation with Borders */}
        {isMenuOpen && (
          <div className="md:hidden mt-4" role="menu" aria-orientation="vertical">
            <div className="border-t border-b border-[#D9D9D9] py-2">
              <div className="px-2 pt-2 pb-3 space-y-1 text-center">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                    role="menuitem"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navigation;