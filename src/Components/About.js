
function About() {

    return(
        <section id="about" className="scroll-mt-20">
            <div className="max-w-5xl mx-auto text-center w-11/12 ">
                <h1 className="header-text mb-5 flex items-center justify-center ">About me <i className="fa-solid fa-user-tie sm:hidden text-primaryColor text-xl ml-2 mb-[2px]"></i></h1>
                <div className="sm:flex items-center ">
                    <div className="">
                        <i className="fa-solid fa-user-tie sm:text-8xl text-primaryColor sm:mr-12 hidden sm:block"></i>
                    </div>
                    <div className="">
                        <p className='sm:text-justify'>
                            <span className='hidden lg:inline'>I Graduated in Civil Engineering from Jimma institute of Technology. I am interested in Technologies and relateds, so I have shifted my career to Technology fields.</span> I am a self-driven fast-learner junior front-end developer and have been practicing a real world projects. My working life has been dedicated to designing and developing interactive websites. In addition, I have also received  <a href='https://www.freecodecamp.org/certification/fccb7c2c749-f4c9-4e3e-876d-cab8bf2cf164/front-end-development-libraries' className=' text-primaryColor hover:opacity-80'>Frontend Web Development Certification</a> from freecodecamp. I am also talented and creative senior graphic designer having more than Two years of experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;