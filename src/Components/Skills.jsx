import React from "react";
import DynamicIconCloud from "./DynamicIconCloud"; // ✅ Only keep this if used

const skills = [
  { name: "Penetration Testing" },
  { name: "Bug Hunting" },
  { name: "Web Application Security" },
  { name: "Networking & Protocols" },
  { name: "OSINT (Open Source Intelligence)" },
  { name: "Cryptography" },
  { name: "Linux Administration" },
  { name: "Reverse Engineering" },
  { name: "Threat Hunting" },
  { name: "Exploit Development" },
  { name: "CTF Challenges" },
];

const Skills = () => {
  return (
    <>
      <div id="skills" className="bg-[#09090B] text-white px-10 mb-12">
        {/* ✅ Added Section Title */}
        <h2 className="text-center text-3xl font-semibold mb-6">
          Technical Skills
        </h2>

        <div className="max-w-2xl mx-auto flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-2 bg-[#1e293b] hover:bg-blue-700 rounded-full text-sm font-medium"
              aria-label={`Skill: ${skill.name}`} // ✅ Improved Accessibility
            >
              <span className="text-xs">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
