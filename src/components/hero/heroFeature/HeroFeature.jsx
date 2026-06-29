import Feature from './feature2.png'
import Hero from './hero.png'
export default function HeroFeature(){
    return (
        <div className='rotate-5'>
            <div className='h-70 w-50 lg:h-[550px] lg:w-[400px] shadow-[inset_0_0_0_8px_rgba(255,255,255,0.3)] rounded-2xl p-2 ' >
                <div className='h-full w-full rounded-xl '>
                    <img className='bg-black object-cover h-[114%] object-[61%_15%]' src={Hero} alt="" />
                </div>
            </div>
        </div>
    )
}