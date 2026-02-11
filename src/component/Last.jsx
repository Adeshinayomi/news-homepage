import first from '../assets/images/image-retro-pcs.jpg'
import second from '../assets/images/image-top-laptops.jpg'
import third from '../assets/images/image-gaming-growth.jpg'
export function Last(){
    return(
        <section role='wrapper' className='grid gap-4 mx-4 mt-10 mb-10 md:flex'>
            <div className='flex gap-6'>
               <img src={first} alt="first-image" className='w-[30%]'/>    
                <div className='grid w-full'>
                    <h1 className='text-3xl font-interbold text-Softred'>01</h1>
                    <p className='text-md text-Darkgrayishblue leading-6 grid font-inter '>
                        <span className='text-black text-lg font-interbolder hover:text-Softred'>Reviving Retro PCs</span>
                        What happens when old PCs are given modern upgrades?
                    </p>
                </div>              
            </div>
            <div className='flex gap-6'>
               <img src={second} alt="first-image" className='w-[30%]'/>    
                <div className='grid w-full'>
                    <h1 className='text-3xl font-interbold text-Softred'>02</h1>
                    <p className='text-md text-Darkgrayishblue leading-6 grid font-inter '>
                        <span className='text-black text-lg font-interbolder hover:text-Softred'>Top 10 Laptops of 2022</span>
                        Our best picks for various needs and budgets.
                    </p>
                </div>              
            </div>
            <div className='flex gap-6'>
               <img src={third} alt="first-image" className='w-[30%]'/>    
                <div className='grid w-full'>
                    <h1 className='text-3xl font-interbold text-Softred'>03</h1>
                    <p className='text-md text-Darkgrayishblue leading-6 grid font-inter '>
                        <span className='text-black text-lg font-interbolder hover:text-Softred'>The Growth of Gaming</span>
                        How the pandemic has sparked fresh opportunities.
                    </p>
                </div>              
            </div>
        </section>
    )
}