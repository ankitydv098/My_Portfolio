import { HeartIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-5 border-t-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="mb-6 md:mb-0 hidden md:block">
          <p className="font-bold text-lg mb-4">Links</p>
          <ul className="flex gap-4">
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://github.com/ankitydv098"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://x.com/AnkitYadav67393"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://www.linkedin.com/in/ankit-kumar098"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Icons Section */}
        <div className="md:hidden flex gap-4 p-2 mb-6">
          <a
            href="https://github.com/ankitydv098"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-kumar098"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/AnkitYadav67393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Center Section */}
        <div className="text-center text-sm">
          <div className="items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <HeartIcon className="text-red-600 h-5 w-5" aria-label="Love" />
              <span>and deployed on</span>
              <GlobeIcon className="text-blue-600 h-5 w-5" aria-label="Globe" />
            </div>
          </div>
          <p className="text-sm mt-4">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
