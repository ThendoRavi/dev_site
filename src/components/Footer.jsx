import { Link } from "react-router-dom";
import hero from "../assets/dev.png";
import linkedIn from "../assets/LinkedIn.svg";
import github from "../assets/github.png";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2026 Thendo Ravhengani. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
        <a href="https://www.linkedin.com/in/thendo-ravhengani-b170982bb/" target="_blank">
          <img
            src={linkedIn}
            width="45"
            height="45"
            alt="Thendo Ravhengani"
            className=" cursor-pointer"
          />
        </a>
        <a href="https://github.com/ThendoRavi" target="_blank">
          <img
            src={github}
            width="45"
            height="30"
            alt="Thendo Ravhengani"
            className=" cursor-pointer"
          />
        </a>
      </nav>
    </footer>
  );
}
