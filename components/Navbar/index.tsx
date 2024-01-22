// const Navbar: React.FC<NavbarProps> = ({ isSticky = false }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // React-spring animation for sticky behavior
//   const { transform, opacity } = useSpring({
//     opacity: isSticky ? 1 : 0.9,
//     transform: isSticky ? "translate3d(0,0,0)" : "translate3d(0,-10px,0)",
//   });

//   // Detect scroll position for sticky behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setMenuOpen(false);
//       if (scrollPosition > 50) {
//         // You can adjust the scroll threshold for the sticky behavior
//         isSticky && setMenuSticky(true);
//       } else {
//         setMenuSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isSticky]);
//   return (
//     <nav className="w-full h-20 p-4">
//       <div className="w-full flex items-center justify-between gap-5">
//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           {menuOpen ? (
//             <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
//           ) : (
//             <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
//           )}
//         </div>

//         {/* Icons  */}
//         <div className="hidden md:flex space-x-4 items-center">
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" rounded-full p-1 bg-black"
//             >
//               <FaTwitter className="text-white text-6 lg:text-lg " />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" rounded-full p-1 bg-black"
//             >
//               <FaFacebookF className="text-white text-6 lg:text-lg " />
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" rounded-full p-1 bg-black"
//             >
//               <FaInstagram className="text-white text-6 lg:text-lg " />
//             </a>

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" rounded-full p-1 bg-black"
//             >
//               <FaTiktok className="text-white text-6 lg:text-lg " />
//             </a>
//           </div>
//         </div>

//         {/* Nav Brand */}
//         <Link href="/">
//           <span className=" font-bold text-3xl">Olive</span>
//         </Link>

//         {/* Search */}
//         <div className="flex items-center gap-2">
//           <div className="hidden md:block">
//             <SearchComponent
//               append={<BiSearch className="text-lg" />}
//               prepend={<BiCamera className="text-lg" />}
//             />
//           </div>

//           <div className="flex space-x-4">
//             <Link href="#" target="_blank" rel="noopener noreferrer">
//               <FaRegHeart className="text-lg lg:text-2xl " />
//             </Link>
//             <Link href="#" target="_blank" rel="noopener noreferrer">
//               <BsPerson className="text-lg lg:text-2xl " />
//             </Link>
//             <Link href="#" target="_blank" rel="noopener noreferrer">
//               <MdOutlineShoppingCart className="text-lg lg:text-2xl " />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <>
//         {/* Mobile menu dropdown */}
//         {menuOpen && (
//           <div className="md:hidden bg-blue-500  flex flex-col z-50">
//             <Link href="/about" className="text-white">About</Link>
//             <Link href="/contact" className="text-white"> Contact</Link>
//           </div>
//         )}
//       </>
//     </nav>
//   );
// };

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaRegHeart,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import SearchComponent from "../SearchComponent";
import { BiCamera, BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

type NavbarProps = {
  isSticky?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isSticky = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sitckyMenu, setMenuSticky] = useState(false);
  isSticky = sitckyMenu;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // React-spring animation for sticky behavior
  const { transform, opacity } = useSpring({
    opacity: isSticky ? 1 : 0.9,
    transform: isSticky ? "translate3d(0,0,0)" : "translate3d(0,-10px,0)",
  });

  // Detect scroll position for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setMenuOpen(false);
      if (scrollPosition > 5) {
        // You can adjust the scroll threshold for the sticky behavior
        isSticky && setMenuSticky(true);
      } else {
        setMenuSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <animated.nav
      className={`w-full h-20 p-4 ${isSticky ? " fixed  top-0 bg-white z-50" : ""}`}
      style={{ transform, opacity }}
    >
      <div className="w-full flex items-center justify-between gap-5">
        {/* Mobile menu button */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes className="text-lg cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-lg cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Icons  */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full p-1 bg-black"
            >
              <FaTwitter className="text-white text-6 lg:text-lg " />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full p-1 bg-black"
            >
              <FaFacebookF className="text-white text-6 lg:text-lg " />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full p-1 bg-black"
            >
              <FaInstagram className="text-white text-6 lg:text-lg " />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full p-1 bg-black"
            >
              <FaTiktok className="text-white text-6 lg:text-lg " />
            </a>
          </div>
        </div>

        {/* Nav Brand */}
        <Link href="/">
          <span className=" font-bold text-3xl">Olive</span>
        </Link>

        {/* Search */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SearchComponent
              append={<BiSearch className="text-lg" />}
              prepend={<BiCamera className="text-lg" />}
            />
          </div>

          <div className="flex space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaRegHeart className="text-lg lg:text-2xl " />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <BsPerson className="text-xl lg:text-3xl " />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <MdOutlineShoppingCart className="text-lg lg:text-2xl " />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-8 h-full bg-white flex flex-col gap-2 z-50">
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/contact" className="">
            {" "}
            Contact
          </Link>
        </div>
      )}
    </animated.nav>
  );
};

export default Navbar;
