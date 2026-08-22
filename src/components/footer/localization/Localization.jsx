import Map from './map.png'

export default function Localization() {
    return (
        <div className='flex flex-col p-12 gap-6>'>
            <h4 className='text-xs font-medium text-[#1A1C1D] pb-6'>LOCALIZAÇÃO</h4>
            <p className='text-sm text-[#474747] pb-6'>
                Av. da Aliança, 777<br/>
                Jardim das Oliveiras<br/>
                São Paulo - SP
            </p>
            <div className='h-full w-full'>
                <img src={Map} alt='Localização da empresa' className='h-20'/>
            </div>
        </div>
    )
}