import { skills, jobs } from "../constants";

import { logo, hackreactor, njit } from "../assets/images";

import { Link } from "react-router-dom";
import resume from "../assets/Resume-LV.pdf";

import CTA from "../components/CTA";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Allan
        </span>
      </h1>

      <div className="flex flex-wrap justify-center">
        <img alt="njit" src={njit} />
        <img alt="hackreactor" src={hackreactor} />
      </div>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I graduated from the New Jersey Institute of Technology with a
          Bachelor's of Science in Web and Information Systems, and trained in
          Full Stack Web Development at Hack Reactor.
        </p>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          I enjoy creating beautiful and intuitive user interfaces. I am
          passionate about Front End Engineering and User Experience.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Technical Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
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

      <div className="py-16">
        <h3 className="subhead-text">Professional Experience</h3>

        <div className="flex">
          <VerticalTimeline>
            {jobs.map((job) => (
              <VerticalTimelineElement
                key={job.company_name}
                date={job.date}
                iconStyle={{ background: job.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: job.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {job.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {job.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {job.points.map((point, index) => (
                      <li
                        className="text-black-500/75 font-normal pl-1 tex-sm"
                        key={`job-point-${index}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="flex justify-center py-5">
          <div className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded text-white font-semibold">
            <Link
              to={resume}
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
