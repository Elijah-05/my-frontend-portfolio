
export default function Footer() {

    return(
        <footer>
            <div className="bg-primaryColor mx-auto text-center sm:mt-24 mt-20 py-4 pb-6">
                <div className="mb-1 sm:mb-0">
                    <a href='https://github.com/Elijah-05' rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-github fa-beat text-lg text-gray-200 mx-4"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/elyas-abebe/' rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-linkedin fa-beat text-lg text-gray-200 mx-4"></i>
                    </a>
                    <a href='https://www.behance.net/Elyas_Abebe' rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-square-behance fa-beat text-lg text-gray-200 mx-4"></i>
                    </a>
                    
                </div>
                <p className='inline text-sm sm:text-md'>Developed by <span className='text-gray-200'>Elijah Abebe</span></p>
                
            </div>
        </footer>
    )
}