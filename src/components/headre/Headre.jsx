import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "../icon/Icon";
import Wrapper from "../Wrapper";
function Header() {
  // State to track the currently visible section
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // Trigger when 50% of the section is in view
      }
    );

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed inset-0 h-[10vh] bg shadow-lg font-poppins z-10 bg-white">
      <Wrapper className="flex h-full justify-between items-center">
        <h2 className="text-2xl font-semibold">S h u b h a m</h2>

        <div className="sm:hidden z-10 ">
          {menuOpen ? (
            <FaXmark
              className="text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          ) : (
            <FaBars
              className="text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          )}
        </div>
        <nav
          className={`absolute inset-0 mt-[10vh] sm:m-0 sm:relative  bg-white transition-all duration-100 sm:translate-x-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          <ul className="w-auto h-[90vh]  sm:h-auto flex flex-col sm:flex-row justify-center items-center gap-8 bg-white">
            {["About", "Projects", "Education"].map(
              (item) => (
                <li
                  onClick={() => setMenuOpen((prev) => !prev)}
                  key={item}
                  className={`nav-item  p-2 rounded-md txet-lg transition-all duration-100 ${
                    activeSection === item ? "text-white bg-black" : ""
                  }`}
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
