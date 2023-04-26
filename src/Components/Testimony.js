import { testimonialData } from "../Data"

export default function Testimony() {
    return(
        <section id="testimony" className="scroll-mt-20">
            <div className="max-w-5xl mx-auto text-center w-11/12 ">
                <h1 className="header-text mb-5 flex items-center justify-center">Testimonials</h1>
                <div className="flex flex-col md:flex-row sm:justify-evenly mx-auto">
                    {testimonialData.map(data => 
                        <div className="bg-gray-100 p-5 flex flex-col items-center justify-between my-2 rounded-xl lg:max-w-md  sm:mx-3 md:shadow-lg hover:scale-105 duration-300 shadow-md hover:shadow-xl" key={data.name}>
                            <div className="">
                                <div className="bg-primaryColor w-10 h-10 mx-auto rounded-full"></div>
                                <h3 className="font-medium">{data.name}</h3>
                            </div>
                            <p className=" py-3">{data.message}</p>
                            <p className=" font-light">{data.profession}</p>
                        </div>    
                    )}
                </div>
            </div>
        </section>
    )
}