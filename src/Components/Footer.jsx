import { HeartIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="mb-6 md:mb-0">
          <p className="font-bold text-lg mb-4">Links</p>
          <ul className="flex gap-4">
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://github.com/shubham-1068"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://x.com/ShubhamRaj69561"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500 transition-colors"
                href="https://www.linkedin.com/in/shubham-raj-13567a308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <div className="items-center justify-center space-x-6">
            
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <HeartIcon className="text-red-600 h-5 w-5" />
              <span>and deployed on</span>
              <GlobeIcon className="text-blue-600 h-5 w-5" />
            </div>
          </div>
          <p className="text-sm mt-4">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
