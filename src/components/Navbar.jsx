import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="text-white font-semibold text-xl"
          >
            Barış Yıldız
          </NavLink>
          
          <div className="flex space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              Ana Sayfa
            </NavLink>
            
            <NavLink 
              to="/projeler"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              Projeler
            </NavLink>
            
            <NavLink 
              to="/teknolojiler"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`
              }
            >
              Teknolojiler
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 