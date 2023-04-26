import { projectData } from "../Data"

export default function Projects() {
    
    return(
        <section id="projects" className="scroll-mt-20">
            <div className="max-w-5xl mx-auto text-center w-11/12">
                <h1 className="header-text mb-5 flex items-center justify-center">Projects</h1>
                <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm:gap-3">
                    {/* Map Iteration  */}
                    {projectData.map(data => 
                    <a href={`${data.link}`} key={data.name}>
                        <div className="border bg-gray-200 m-2 flex justify-end rounded-xl w-[90%] max-w-[350px] min-h-[200px] xl:w-[100%] md:h-[] md:max-w-[350px] sm:max-w-[300px] sm:w-[100%] mx-auto bg-contain hover:scale-105 duration-300 shadow-lg hover:shadow-xl" style={{backgroundImage: `url(${data.image})`}}>
                            <div className="project-side-notes bg-primaryColor w-1/2 p-2 pt-8 flex flex-col justify-between text-left rounded-r-xl">
                                <h3 className="font-medium text-md leading-5 sm:mb-1">{data.name}</h3>
                                <p className="font-light sm:text-sm leading-5 sm:leading-4 mb-1">{data.desc}</p>
                                <div className="technologies">
                                    <div className="text-right mr-2"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                    )}
                </div>
            </div>
        </section>
    )
}


