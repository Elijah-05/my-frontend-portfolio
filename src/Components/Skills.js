import { SkillsData } from "../Data";

function Skills() {
    return (
        <section id="skills" className="scroll-mt-20">
            <div className="max-w-5xl mx-auto text-center w-11/12">
                <h1 className="header-text mb-3">Skills</h1>
                <div className="master-container sm:flex items-center">
                    <div className="sm:flex w-full sm:mr-2">
                        <div className="sm:mr-5 sm:flex sm:flex-col items-center justify-center sm:text-1xl lg:text-2xl">
                            <i className="fa-solid fa-code text-primaryColor mb-2 "><span className="text-1xl sm:mt-3 tablet md:block sm:hidden"> Development</span></i>
                        </div>
                        <div className="w-full">
                            {SkillsData[0].map(data => 
                                <div className="bg-[#E7E7E7] my-2 rounded-xl text-left" key={data.skill}>
                                    <div className="bg-primaryColor rounded-xl pl-5 text-white" style={{width: `${data.value}%`}}><span className="">{data.skill}</span></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:flex sm:ml-4 sm:flex-row-reverse sm:w-11/12">
                        <div className="sm:ml-5 sm:flex sm:flex-col items-center justify-center sm:text-1xl lg:text-2xl">
                            <i className="fa-solid fa-pen-nib text-primaryColor mb-2"><span className="text-1xl sm:mt-3 md:block sm:hidden"> Design</span></i>
                        </div>
                        <div className="w-full">
                            {SkillsData[1].map(data => 
                               <div className="bg-[#E7E7E7] my-2 rounded-xl text-left" key={data.skill}>
                                <div className="bg-primaryColor rounded-xl pl-5 text-white" style={{width: `${data.value}%`}}>
                                    <span className="">{data.skill}</span>
                                </div>
                           </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;