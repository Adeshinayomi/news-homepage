export function New(){
    return (
        <section className="mx-4 mt-10 grid gap-6 bg-Verydarkblue py-4 px-6 md:mt-5 md:w-[40%]">
            <h1 className="text-Softorange text-3xl font-interbold">New</h1>
            <ul className="grid gap-6">
                <li className="grid gap-3">
                    <h1 className="text-Offwhite text-xl font-interbold hover:text-Softorange">Hydrogen VS Electric Cars</h1>
                    <p className="text-Grayishblue ">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className="mt-5"/>
                </li>
                <li className="grid gap-3">
                    <h1 className="text-Offwhite text-xl font-interbold hover:text-Softorange">The Downsides of AI Artistry</h1>
                    <p className="text-Grayishblue ">What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className="mt-5"/>
                </li>
                <li className="grid gap-3">
                    <h1 className="text-Offwhite text-xl font-interbold hover:text-Softorange">Is VC Funding Drying Up?</h1>
                    <p className="text-Grayishblue ">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </li>
            </ul>
        </section>
    )
}