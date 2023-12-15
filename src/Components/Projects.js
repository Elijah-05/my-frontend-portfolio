import { projectData } from "../Data";

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
                className="project-container border relative bg-gray-200 m-3 overflow-hidden flex justify-end rounded-xl w-[90%] max-w-[350px] min-h-[200px] xl:w-[100%] md:max-w-[300px] sm:max-w-[300px] sm:w-[100%] mx-auto bg-contain hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="project-side-notes bg-primaryColor w-1/2 p-2 pt-4 sm:pt-8 pb-4  absolute right-0 h-full text-left rounded-r-xl duration-500 ">
                  <h3 className="text opacity-100 font-medium text-md leading-5 mb-3 sm:mb-3">
                    {data.name}
                  </h3>
                  <p className="text opacity-100 text-gray-200 font-light text-sm leading-4 sm:leading-4 mb-1">
                    {data.desc}
                  </p>
                  {/* <div className="technologies">
                                    <div className="text-right mr-2"></div>
                                </div> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
