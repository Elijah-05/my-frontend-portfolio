import React from "react";
import Typical from "react-typical";
import avatar from '../images/avatar.jpg';
// import banner from '../images/banner.jpg';
// -mt-[70px] sm:mt-0 sm:top-80 sm:-translate-y-1/2 
function App() {
  return (

    <section id="banner" className="mb-52 sm:mb-28 bg-black sm:bg-[url('banner.jpg')] bg-no-repeat bg-cover bg-right scroll-mt-20">
      <div className="sm:banner sm:h-[calc(100vh-47px)] w-full h-[350px] relative flex items-center justify-center sm:relative sm:block">
        <div className="">
          <h1 className="text-white text-4xl text-center -mt-[70px] lg:left-28 md:left-20 sm:left-[10%]  xl:left-60 sm:text-left sm:absolute sm:text-6xl
          sm:mt-[calc(50vh-50px)] sm:-translate-y-1/2
          
          "><span className="text-5xl sm:text-8xl">Hi</span> I'm<br/>
          <Typical className="hidden sm:block text-primaryColor" 
          loop={Infinity}
          steps={[
            'Elyas Abebe',
            1000,
            '',
            100,
            'Fronted Developer',
            1000,
            '',
            100,
            'Graphic Designer',
            1000,
            '',
            100,
            'UI/UX Designer',
            1000
          ]}
          >
          </Typical>
          <span className="sm:hidden">Elyas Abebe</span>
          </h1>
        </div>
        <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <img className="max-w-[185px] max-h-[185px] rounded-full ring-4 ring-white" src={avatar} alt="Elijah profile"></img>
          <h4 className="absolute left-1/2 translate-y-3 w-full -translate-x-1/2 text-center"><span className="font-medium text-primaryColor">Frontend Developer</span><br/>Graphic Designer</h4>
        </div>
      </div>
    </section>

  );
}

export default App;