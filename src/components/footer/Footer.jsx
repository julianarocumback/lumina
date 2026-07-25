import { useEffect, useState } from "react"
import {MobileAbout, DesktopAbout} from "./about/About"
import Navegation from "./navegation/Navegation"
import Support from "./support/Support"
import Localization from "./localization/Localization"


export default function Footer() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 1200)
        }
        checkSize()

        window.addEventListener('resize', checkSize)

        return () => window.removeEventListener('resize', checkSize)
    },[])

    return(
        <div className="bg-[#f8fafc] mb-14 lg:mb-0">
            {isMobile? (
                <footer className=" w-full h-full ">
                    <MobileAbout/>
                </footer>
            ): (
                <footer className="w-full h-full grid grid-cols-4 gap-4 px-16">
                <DesktopAbout/>
                <Navegation/>
                <Support/>
                <Localization/>
            </footer>
            )}
        </div>
    )
}