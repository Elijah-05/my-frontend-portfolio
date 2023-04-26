import logo from '../images/logo white.png'

export default function Nav() {
    const handleMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('list');

        hamburgerBtn.classList.toggle('toggle-btn');
        mobileMenu.classList.toggle('responsive-nav')
    }

    return(
        <header className='px-2 bg-primaryColor py-3 sm:sticky sm:top-0 z-[999]  shadow-lg'>
            <nav className='max-w-5xl mx-auto lg:px-0 md:px-14 sm:px-4 flex items-center justify-between'>
                <div className=''><a href='#banner'><img className='w-10 hover:scale-105 hover:shadow-lg' src={logo} alt="logo"></img></a></div>
                <ul id='list' className='hidden sm:flex text-white mt-1 duration-500'>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#banner" className=''>Home</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1' ></div>
                    </li>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#about" >About</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1'></div>
                    </li>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#skills" >Skills</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1'></div>
                    </li>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#projects" >Projects</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1'></div>
                    </li>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#testimony" >Testimonials</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1'></div>
                    </li>
                    <li className='px-2 hover:opacity-80 nav-border' onClick={handleMenu}>
                        <a href="#contact" >Contact</a>
                        <div className='bg-white h-1 w-0 bB duration-500 translate-y-1'></div>
                    </li>
                </ul>
                <button id='hamburger-button' className='sm:hidden cursor-pointer relative w-8 h-8 mr-1' onClick={handleMenu}>
                    <div className='bg-white w-8 h-1 absolute transition-all duration-500 before:content-[""] before:bg-white before:w-8 before:absolute before:h-1 before:-translate-y-3 before:-translate-x-4 before:transition-all before:duration-500
                    after:content-[""] after:bg-white after:w-8 after:absolute after:h-1 after:translate-y-3 after:-translate-x-4 after:transition-all after:duration-500'></div>
                </button>
            </nav>
        </header>
    )
}