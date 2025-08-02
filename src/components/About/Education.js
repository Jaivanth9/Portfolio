import React from "react";
//import "../style.css"; // Stay with your global styles

const educationData = [
  {
    institute: "Lovely Professional University",
    degree: "B.Tech in Computer Science",
    year: "2022 - 2026",
    description: "Graduated with honors, specialized in web development and artificial intelligence.",
  },
  {
    institute: "Tirumala Educational Institutes",
    degree: "Intermediate (Science)",
    year: "2020 - 2022",
    description: "Focused on Physics, Chemistry and Mathematics.",
  },
  // Add more items as needed
  {
    institute: "Sri Chaitanya Techno School",
    degree: "Matriculation (Science)",
    year: "2019 - 2020",
    description: "Foundation on Physics, Chemistry and Mathematics.",
  },
];

const Education = () => (
  <section className="timeline-section" id="education">
    {/* <h2 className="resume-title purple" style={{ textAlign: "center", marginBottom: 50 }}>Education</h2> */}
    <div className="timeline">
      {educationData.map((edu, idx) => (
        <div
          className={`timeline-container ${idx % 2 === 0 ? "left" : "right"}`}
          key={idx}
        >
          <div className="timeline-content">
            <h3>{edu.institute}</h3>
            <div style={{ fontWeight: 600, color: 'var(--imp-text-color)' }}>
              {edu.degree}
              <span style={{ color: "#a588c0", fontWeight: 400, marginLeft: 12 }}>({edu.year})</span>
            </div>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
