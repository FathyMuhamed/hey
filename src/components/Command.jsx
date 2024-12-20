import { useEffect } from "react";
import { Command } from "cmdk";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PiDevToLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";

function CommandMenu({ setIslandState, onBarUpdate, open, setOpen }) {
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[340px] sm:max-w-[540px] md:max-w-[640px] p-2 bg-white  rounded-xl shadow-2xl border text-gray-700"
    >
      <Command.Input
        placeholder="Type a command or search..."
        className="w-full px-4 py-3 text-gray-700 bg-transparent outline-none placeholder:text-gray-700  "
      />

      <Command.List className="mt-4 overflow-y-auto max-h-[400px]">
        <Command.Group
          heading="VISIT"
          className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500"
        >
          <Command.Item
            className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100  cursor-pointer"
            tabIndex={0}
          >
            <a
              href="https://www.linkedin.com/in/fathymuhamed/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaLinkedinIn className="w-4 h-4" />
              LinkedIn
            </a>
          </Command.Item>
          <Command.Item className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100 cursor-pointer">
            <a
              href="https://github.com/fathymuhamed"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              Github
            </a>
          </Command.Item>
          <Command.Item className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100 cursor-pointer">
            <a
              href="https://dev.to/fathiimuhamed"
              target="_blank"
              className="flex items-center gap-2"
            >
              <PiDevToLogo className="w-4 h-4" />
              Dev
            </a>
          </Command.Item>
        </Command.Group>
        <Command.Group
          heading="CONTACT"
          className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500"
        >
          <Command.Item className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100  cursor-pointer">
            <a
              href="mailto:fathyymuhamed@gmail.com"
              className="flex items-center gap-2"
            >
              <MdOutlineEmail className="w-4 h-4" />
              Send Email
            </a>
          </Command.Item>
          <Command.Item
            className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            onSelect={() => {
              navigator.clipboard.writeText("fathyymuhamed@gmail.com");
              onBarUpdate();
            }}
          >
            <MdOutlineEmail className="w-4 h-4" />
            Copy Email
          </Command.Item>
          <Command.Item
            className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100 cursor-pointer  flex items-center gap-2"
            onSelect={() => {
              window.open(
                "https://www.linkedin.com/messaging/compose?recipient=fathymuhamed",
                "_blank"
              );
              onBarUpdate();
            }}
          >
            <MdOutlineEmail className="w-4 h-4" />
            +
            <FaLinkedinIn className="w-4 h-4" />
            Message on LinkedIn
          </Command.Item>
        </Command.Group>
        <Command.Group
          heading="CV"
          className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500"
        >
          <Command.Item className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100  cursor-pointer">
            <a
              href="./FathyMuhamed-CV.pdf"
              className="flex items-center gap-2"
              target="_blank"
            >
              <SiReaddotcv className="w-4 h-4" />
              Show Cv
            </a>
          </Command.Item>
          <Command.Item className="px-4 py-2 rounded-lg text-sm text-gray-700  hover:bg-gray-100  cursor-pointer">
            <a
              href="./FathyMuhamed-CV.pdf"
              download
              target="_blank"
              className="flex items-center gap-2"
            >
              <SiReaddotcv className="w-4 h-4" />
              Download Cv
            </a>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

export default CommandMenu;
