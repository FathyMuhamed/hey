import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-center">
          <span className="text-sm font-medium flex items-center">
            Built with Fathy
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#216E39] mx-1" />
          <span className="flex items-center gap-2">
            <a href="https://github.com/fathymuhamed" target="_blank">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/fathymuhamed/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://dev.to/fathiimuhamed" target="_blank">
              <FaDev />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
