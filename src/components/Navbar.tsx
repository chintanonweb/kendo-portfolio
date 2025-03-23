import { NavLink } from "react-router-dom";
import { Home, User, Briefcase, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";

const Navbar = () => {
  const navItems = [
    { path: "/", icon: <Home size={20} />, label: "Home" },
    { path: "/about", icon: <User size={20} />, label: "About" },
    { path: "/projects", icon: <Briefcase size={20} />, label: "Projects" },
    {
      path: "/testimonials",
      icon: <MessageCircle size={20} />,
      label: "Testimonials",
    },
    { path: "/contact", icon: <Phone size={20} />, label: "Contact" },
  ];

  return (
    <AppBar
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <AppBarSection
            className="flex-shrink-0"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </AppBarSection>
          <AppBarSection className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-purple-100 text-purple-700 shadow-md"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={isActive ? { y: [0, -2, 0] } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </div>
          </AppBarSection>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
