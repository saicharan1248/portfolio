import Main from "./Main";
import MyProjects from "./MyProjects";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className=" ">
        <section className="intro grid grid-cols-1 md:grid-cols-[min-content_max-content] gap-4 mx-auto">
          <img
            src="src/assets/portfolio.jpg"
            alt="a picture of Saicharan smiling"
            className="mt-2 rounded-full w-[200px] h-[210px] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] col-start-1"
          />
          <div className="col-start-2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-1">
              Hi, I am <strong>Sai Charan</strong>
            </h1>
            <p className="text-xl text-gray-600">front-end dev</p>
          </div>
        </section>
        {/* Add Main, MyProjects, and Footer components below */}
        <Main />
        <MyProjects />
        <Footer />
      </div>
    </>
  );
};

export default Home;
