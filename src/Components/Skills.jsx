import React from 'react';

const skills = [
  { name: 'Penetration Testing' },
  { name: 'Bug Hunting' },
  { name: 'Web Application Security' },
  { name: 'Networking & Protocols' },
  { name: 'OSINT (Open Source Intelligence)' },
  { name: 'Cryptography' },
  { name: 'Linux Administration' },
  { name: 'Reverse Engineering' },
  { name: 'Threat Hunting' },
  { name: 'Exploit Development' },
  { name: 'CTF Challenges' },
];

const Skills = () => {
  return (
    <>
      <div id="skills" className="bg-[#09090B] text-white py-12 px-10 mb-12">
        <h2 className="text-4xl text-white text-center font-medium audiowide-regular mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2 bg-[#1e293b] hover:bg-blue-700 rounded-full text-sm font-medium"
            >
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="border border-[#27272A] w-[80%]"></div>
      </div>
    </>

  );
};

export default Skills;
