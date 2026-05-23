import { MdOutlineAutoAwesome } from "react-icons/md";
import Badge from "./badge/Badge"
import Button from "./button/Button"
import HeroContent from "./heroContent/HeroCotent"
import HeroFeature from "./heroFeature/HeroFeature"

export default function Hero() {
    return (
        <div className='h-screen w-full flex flex-col px-10 pt-16 animate-glow bg-[length:200%_200%] lg:justify-center
        bg-[radial-gradient(at_0%_0%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(at_50%_0%,rgba(147,51,234,0.3),transparent_50%),radial-gradient(at_100%_0%,rgba(46,204,133,0.3),transparent_50%),radial-gradient(at_0%_100%,rgba(231,76,60,0.3),transparent_50%),radial-gradient(at_90%_100%,rgba(254,202,87,0.3),transparent_50%),radial-gradient(at_0%_100%,rgba(255,107,107,0.3),transparent_50%),radial-gradient(50%_100%,rgba(46,204,133,0.10),transparent_50%)]' >
            <div className="flex flex-col gap-10 py-16 lg:flex-row lg:justify-center lg:gap-40">
                <div className="flex flex-col order-1 lg:order-0 lg:gap-10 gap-4">

                    <div className='hidden md:block'>
                        <Badge/>
                    </div>
                    
                    <div className='order-1 md:order-0 flex flex-col my-1 gap-2'>
                        <HeroContent/>
                        </div>
                        <div className='flex justify-center my-4 lg:justify-start order-1'>
                            <Button style={'bg-gradient-to-r from-[#00639A] to-[#BC004B] h-15 rounded-4xl px-8 text-white flex gap-2 items-center'} texto={`Explorar Coleção`} icone={<span className="material-icons">auto_awesome</span>}></Button>
                    </div>
                
                </div>
                <div className="flex justify-center">
                    <HeroFeature/>
                </div>
            </div>
        </div>
    )

}