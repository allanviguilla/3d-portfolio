import { skills } from "../constants";

import { hackreactor, njit } from "../assets/images";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Allan
        </span>{" "}
        of
      </h1>

      <div className="flex flex-wrap justify-center">
        <img alt="njit" src={njit} />
        <img alt="hackreactor" src={hackreactor} />
      </div>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I enjoy building beautiful, intuitive user interaces. I was trained as
          a Full Stack Developer but I am passionate for all things Front End
          and UI Design.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Technical Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div>
              <div>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
