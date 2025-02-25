import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu after click
    }
  };

  return (
    <div className="relative border ">
      <nav className="w-full px-2 py-2 fixed z-10  bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-2xl">
              <a
                href="#home"
                style={{ color: 'rgba(4, 0, 77, 1)' }}
              >
                {"< PORTFOLIO />"}
              </a>
            </span>
          </div>
          <div className="hidden md:flex space-x-7 items-center">
            <button
              onClick={() => handleScroll("home")}
              className="text-black font-bold px-3 py-1 rounded-md transition-colors duration-200  hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
            >
              HOME
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="text-black font-bold px-3 py-1 rounded-md transition-colors duration-200  hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-black font-bold px-3 py-1 rounded-md transition-colors duration-200  hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
            >
              PROJECTS
            </button>
            <button
              onClick={() => handleScroll("skills")}
              className="text-black font-bold px-3 py-1 rounded-md transition-colors duration-200  hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
            >
              SKILLS
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-black font-bold px-3 py-1 rounded-md transition-colors duration-200  hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
            >
              CONTACT
            </button>
            <a
               href="https://drive.google.com/uc?export=download&id=13LutxzlpJ9tpU2z5vOTq10dts46el2H8"
               download="Srinandan_Resume.pdf"  // Added name for downloaded file
               onClick={(e) => {
                 e.preventDefault();
                 window.open("https://drive.google.com/file/d/13LutxzlpJ9tpU2z5vOTq10dts46el2H8/view", "_blank");
                 window.location.href = "https://drive.google.com/uc?export=download&id=13LutxzlpJ9tpU2z5vOTq10dts46el2H8";
               }}
               className="flex items-center text-black font-bold px-3 py-1 rounded-md transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
             >
               <IoIosDownload className="mr-1" />
               RESUME
            </a>
          </div>
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setOpen(!isOpen)}
          >
            {!isOpen ? <GiHamburgerMenu /> : <IoMdClose />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center bg-slate-100 fixed top-[52px] left-0 right-0 shadow-lg z-10`}
      >
        <div className="flex flex-col items-center w-full py-4 space-y-4">
          <button
            onClick={() => handleScroll("home")}
            className="text-black hover:underline w-full text-center"
          >
            HOME
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="text-black hover:underline w-full text-center"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-black hover:underline w-full text-center"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="text-black hover:underline w-full text-center"
          >
            SKILLS
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-black hover:underline w-full text-center"
          >
            CONTACT
          </button>
          <a
               href="https://drive.google.com/uc?export=download&id=13LutxzlpJ9tpU2z5vOTq10dts46el2H8"
               download="Srinandan_Resume.pdf"  // Added name for downloaded file
               onClick={(e) => {
                 e.preventDefault();
                 window.open("https://drive.google.com/file/d/13LutxzlpJ9tpU2z5vOTq10dts46el2H8/view", "_blank");
                 window.location.href = "https://drive.google.com/uc?export=download&id=13LutxzlpJ9tpU2z5vOTq10dts46el2H8";
               }}
               className="flex items-center text-black font-bold px-3 py-1 rounded-md transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#21178a] hover:to-[#5166ff] hover:text-white"
             >
               <IoIosDownload className="mr-1" />
               RESUME
            </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
