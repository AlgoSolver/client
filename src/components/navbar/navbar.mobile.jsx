import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import RenderAuth from "./navbar.auth";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);
  return (
    <div className="menu">
      <div className="menu__icon">
        <div
          onClick={() => setIsMenuOpen((e) => !e)}
          class={`icon nav-icon-5 ${isMenuOpen ? "open" : null}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="landing"
            onClick={() => setIsMenuOpen(false)}
          >
            import {(motion, AnimatePresence)} from "framer-motion";
            <motion.nav
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="menu__container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="menu__body">
                <ul className="menu__list list1">
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/playground"
                      className="menu__link"
                    >
                      playground
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/practise"
                      className="menu__link"
                    >
                      practise
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/problems"
                      className="menu__link"
                    >
                      problems
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/blog"
                      className="menu__link"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/elements"
                      className="menu__link"
                    >
                      elements
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu__list">
                  <RenderAuth close={close} />
                </ul>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;