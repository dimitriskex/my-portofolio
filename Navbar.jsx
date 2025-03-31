import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">Dimitris</Link>
        <ul className="flex space-x-4 text-sm font-medium text-zinc-300">
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/skills" className="hover:text-white">Skills</Link></li>
          <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
}