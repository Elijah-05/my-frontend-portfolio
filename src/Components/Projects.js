import { projectData } from "../Data";
import { FaEye } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center w-11/12">
        <h1 className="header-text mb-5 flex items-center justify-center ">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm:gap-3">
          {/* Map Iteration  */}
          {projectData.map((data) => (
            <a
              href={`${data.link}`}
              key={data.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="project-container group border relative bg-gray-200 m-3 overflow-hidden flex justify-end rounded-xl w-[90%] max-w-[350px] min-h-[200px] xl:w-[100%] md:max-w-[300px] sm:max-w-[300px] sm:w-[100%] mx-auto bg-contain hover:scale-105 duration-300 shadow-[0_4px_12px_2px_rgba(0,0,0,0.3)] hover:shadow-xl"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className=" absolute w-full h-full bg-black opacity-0 group-hover:opacity-70 duration-500" />
                <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 group-hover:-translate-y-2/3 text-white text-5xl opacity-0 group-hover:opacity-80 duration-1000">
                  <FaEye />
                </div>
                <div className="project-side-notes w-full bottom-0 p-2 pt-4 sm:pt-8 group-hover:translate-y-0 translate-y-12 group-hover:opacity-100 opacity-0 bg-gradient-to-t from-10% to-100% from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0)] absolute text-white text-left duration-700 ">
                  <h3 className="text opacity-100 font-medium text-sm leading-5 ">
                    {data.name}
                  </h3>
                  <p className="text opacity-100 text-gray-300 font-light text-xs leading-4 sm:leading-4">
                    {data.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
