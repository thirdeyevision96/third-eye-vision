import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Button from "../commonComponents/Button";
import Container from "../commonComponents/Container";
import Logo from "../../assets/tev-logo2.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Deliverables", path: "/deliverables" },
  { name: "Policy", path: "/policy" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[10000] transition-all duration-500 ${
          scrolled
            ? "border-b border-ivory-100/10 bg-charcoal-950/90 shadow-luxury backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-[74px] items-center justify-between gap-8">
          
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-ivory-100"
            aria-label="Third Eye Vision home"
          >
            <img
              src={Logo}
              alt="Third Eye Vision"
              className="h-auto w-[110px] object-contain sm:w-[110px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-gold-300"
                      : "text-ivory-100/75 hover:text-ivory-100"
                  }`
                }
              >
                {link.name}

                <span
                  className={({ isActive }) =>
                    `absolute bottom-0 left-0 h-px bg-gold-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`
                  }
                />
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button className="px-4 py-2.5 text-[9px]" href="/ownpackage">
              Build Your Own Package
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-ivory-100/15 text-ivory-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 bg-charcoal-950 pt-28 lg:hidden"
          >
            <Container className="flex h-full flex-col">
              
              <nav className="flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.045,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ivory-100/10 py-4 font-display text-3xl text-ivory-100"
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <Button className="mt-8 w-fit">
                Build Your Own Package
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}