const Main = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">What I Work</h2>
      <p className="mb-4">
        React Developer with expertise in building enterprise-level, end-to-end
        web applications using React.js, TypeScript, and Next.js. Strong
        background in front-end architecture, UI/UX strategy, and performance
        optimization. Adept at integrating market-driven insights into product
        development, and collaborating with cross-functional teams to deliver
        high-quality solutions. Proven ability to communicate technical concepts
        effectively to both technical and non-technical stakeholders in Agile
        environments.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        {[
          "React",
          "Next.js",
          "Angular",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Back-End Development",
          "Node.js",
          "Python",
          "AWS",
          "Databases",
          "MongoDB",
          "Snowflake",
          "Git",
          "Jenkins",
          "REST/WebSocket APIs",
          "AI/ML",
          "OpenAI Expertise",
          "RAG Framework Implementation",
          "LangChain",
          "Llama Index",
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 hover:bg-blue-200 transition duration-300 ease-in-out p-4 rounded-lg shadow-md text-center"
          >
            {skill}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">Work Contributions</h2>
      <p>
        I provide comprehensive solutions by leveraging my expertise in modern
        web technologies and frameworks. My focus is on delivering high-quality,
        user-centric applications that meet business needs while ensuring
        optimal performance and scalability. I thrive in collaborative
        environments, working closely with cross-functional teams to drive
        projects from conception to completion.
      </p>
    </div>
  );
};

export default Main;
