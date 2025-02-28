import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="max-w-4xl mx-auto p-6   shadow-md">
        <ul className="flex flex-wrap justify-center mt-4 w-[500px] h-[500px]">
          <li className="py-2 flex items-center mx-2 ">
            {" "}
            <Link
              to="/projects/e-commerce-platform"
              className="flex items-center transition-transform transform duration-300 ease-in-out delay-150 hover:scale-105 " // Added hover effect
            >
              <img
                src="src/assets/e-commerce-image.jpg"
                alt="E-Commerce Platform"
                className="h-auto w-1/2 " // Added hover effect
              />
              <span className="ml-4 font-bold text-blue-600 hover:text-blue-800">
                E-Commerce Platform
              </span>
            </Link>
          </li>
          <li className="py-2 flex items-center mx-2 ">
            {" "}
            <Link
              to="/projects/ai-powered-chatbot"
              className="flex items-center transition-transform transform duration-300 ease-in-out delay-150 hover:scale-105" // Added hover effect
            >
              <img
                src="src/assets/ai_picture.jpg"
                alt="Ai Platform"
                className="h-auto w-1/2 " // Added hover effect
              />
              <span className="ml-4  font-bold text-blue-600 hover:text-blue-800">
                AI-Powered Chatbot
              </span>
            </Link>
          </li>
          <li className="py-2 flex items-center mx-2 ">
            {" "}
            <Link
              to="/projects/ml-model-dashboard"
              className="flex items-center transition-transform transform duration-300 ease-in-out delay-150 hover:scale-105" // Added hover effect
            >
              <img
                src="src/assets/ml_pic.jpg"
                alt="Ml Platform"
                className="h-auto w-1/2" // Added hover effect
              />
              <span className="ml-4 font-bold text-blue-600 hover:text-blue-800">
                Multi-Agent ML Model
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MyProjects;
