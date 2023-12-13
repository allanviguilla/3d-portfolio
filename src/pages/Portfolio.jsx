import { Link } from "react-router-dom";

import CTA from "../components/CTA";

import { projects } from "../constants";

import { arrow } from "../assets/icons";

const Portfolio = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Allan's{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Portfolio
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate">
        <p>
          Over the years I've worked with teams and solo on passion projects to
          build some cool concept MVPs and Full Stack applications. Here are
          some samples of my work:
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full grid place-items-center"
            key={project.name}
          >
            <div className="block-container w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] my-10">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.img} />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  className="font-semibold text-blue-600"
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </Link>
                <img
                  className="w-4 h-4 object-contain"
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Portfolio;
