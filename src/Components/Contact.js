import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
    //   if(name.length !== 0 || email.length !== 0) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    //    }
    }
    
    return(
        <section id="contact" className="scroll-mt-20">
            <div className="max-w-5xl mx-auto w-11/12 ">
                <h1 className="header-text mb-5 text-center">Contact me</h1>

                <div className="Address Info my-5">
                    <div className="phones flex items-center">
                        <i className="fa-solid fa-square-phone text-primaryColor mr-2 text-2xl"></i>
                        <a href="tel:+251932945417" className=" font-medium text-lg hover:scale-105 hover:text-primaryColor origin-left duration-100">+251-932-94-5417</a>
                    </div>
                    <div className="phones flex items-center">
                        <i className="fa-solid fa-square-phone text-primaryColor mr-2 text-2xl invisible"></i>
                        <a href="tel:+251930819898" className=" font-medium  text-lg hover:scale-105 hover:text-primaryColor origin-left duration-100">+251-930-81-9898</a>
                    </div>
                    <div className="Email flex items-center">
                        <i className="fa-solid fa-square-envelope text-primaryColor mr-2 text-2xl"></i>
                        <a href="mailto: ellaab804@gmail.com" className="font-normal hover:scale-105 hover:text-primaryColor origin-left duration-100">ellaab804@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full">
                    <div id="map" className="bg-gray-300 h-36 sm:h-52 md:h-[340px]  w-full md:w-[50%] mr-5 ">
                        <iframe style={{height: '100%', width: '100%', border:0}} frameBorder="0" 
                        src="https://www.google.com/maps/embed/v1/place?q=Meskel+Flower,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
                        title="map">
                        </iframe>
                    </div>

                    <div id="form" className="w-full mt-5 md:mt-0 md:w-[50%]">
                        <h2 className="text-center text-lg">Email Me</h2>

                        <form action="" netlify="true" name="contact" method="POST" onSubmit={handleSubmit}>
                            <input className="block bg-gray-200 indent-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-primaryColor placeholder:text-gray-400  sm:text-sm sm:leading-6 my-2" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />

                            <input className="block bg-gray-200 indent-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-primaryColor placeholder:text-gray-400  sm:text-sm sm:leading-6 my-2" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />

                            <textarea className="block h-40 bg-gray-200 indent-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-primaryColor placeholder:text-gray-400  sm:text-sm sm:leading-6 my-2 " 
                            type="text" name="message" placeholder="Your message" onChange={(e) => setMessage(e.target.value)} required />
                            <button className="w-full rounded-md bg-primaryColor px-3 py-3 text-base md:text-base font-medium text-white shadow-sm hover:bg-[#5BB5B6]" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}