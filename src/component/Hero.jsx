import heromobile from "../assets/images/image-web-3-mobile.jpg"
import herodesktop from "../assets/images/image-web-3-desktop.jpg"
export function Hero(){
    return(
        <section role="hero" className="px-4 grid gap-7 mt-4 md:w-[100%]">
            <img src={heromobile} alt="hero-image" className="md:w-full md:hidden"/>
            <img src={herodesktop} alt="hero-image" className="hidden md:grid"/>
            <div className="grid gap-5 md:grid-cols-2">
                <h1 className="text-5xl font-interbolder md:w-[80%]">The Bright Future of Web 3.0?</h1>
                <p className="text-Darkgrayishblue font-inter text-md leading-7 grid gap-5 md:gap-6 md:leading-6">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                    <button className="bg-Softred px-8 py-4 w-fit text-black text-md font-interbolder tracking-[.35em] md:py-2 md:px-8 hover:bg-Verydarkblue hover:text-Offwhite">
                      READ MORE
                   </button>
                </p>
                
            </div>
        </section>
    )
}