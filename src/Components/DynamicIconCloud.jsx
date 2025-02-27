import React from 'react';
import { Cloud } from 'react-icon-cloud';

// Importing icons
import aircrack from '../assets/images/aircrack.png';
import amass from '../assets/images/amass.png';
import beef from '../assets/images/beef.png';
import burpsuite from '../assets/images/burpsuite.png';
import ffuf from '../assets/images/ffuf.png';
import gobuster from '../assets/images/gobuster.png';
import hashcat from '../assets/images/hashcat.png';
import hydra from '../assets/images/hydra.png';
import john from '../assets/images/john.png';
import linux from '../assets/images/linux.png';
import metasploit from '../assets/images/metasploit.png';
import wireshark from '../assets/images/wireshark.png';
import zaproxy from '../assets/images/zaproxy.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import Python from '../assets/images/python.png';

const DynamicIconCloud = () => {
  const icons = [
    { src: aircrack, alt: "Aircrack Icon" },
    { src: amass, alt: "Amass Icon" },
    { src: beef, alt: "BeEF Icon" },
    { src: burpsuite, alt: "Burp Suite Icon" },
    { src: ffuf, alt: "FFUF Icon" },
    { src: gobuster, alt: "Gobuster Icon" },
    { src: hashcat, alt: "Hashcat Icon" },
    { src: hydra, alt: "Hydra Icon" },
    { src: john, alt: "John the Ripper Icon" },
    { src: linux, alt: "Linux Icon" },
    { src: metasploit, alt: "Metasploit Icon" },
    { src: wireshark, alt: "Wireshark Icon" },
    { src: zaproxy, alt: "Zaproxy Icon" },
    { src: git, alt: "Git Icon" },
    { src: github, alt: "GitHub Icon" },
    { src: Python, alt: "Python Icon" },
  ];

  return (
    <>
      <div id="skills" className="h-24"></div>

      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl text-white text-center font-medium audiowide-regular">
          Skills
        </h2>

        {/* Cloud component with Tailwind CSS for scaling */}
        <div className="transform scale-75">
          <Cloud
            keepStatic={true}
            autoRotate={true}
            initialSpeed={0.05}
            maxSpeed={0.2}
            shape="sphere"
          >
            {icons.map((icon, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-block"
              >
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 h-12 object-contain"
                />
              </a>
            ))}
          </Cloud>
        </div>
      </div>
      <div className="my-10 w-[80%] max-w-[600px] justify-self-center"></div>
    </>
  );
};

export default DynamicIconCloud;
