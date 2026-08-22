import { useEffect, useState } from 'react'
import {MobileAbout, DesktopAbout} from './about/About'
import Navigation from './navigation/Navigation'
import Support from './support/Support'
import Localization from './localization/Localization'


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
        <div className='bg-[#f8fafc] mb-14 lg:mb-0'>
            {isMobile? (
                <footer className='w-full h-full'>
                    <MobileAbout/>
                </footer>
            ): (
                <footer className='grid grid-cols-4 gap-4 w-full h-full px-16'>
                <DesktopAbout/>
                <Navigation/>
                <Support/>
                <Localization/>
            </footer>
            )}
        </div>
    )
}