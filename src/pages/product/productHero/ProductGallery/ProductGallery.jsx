import {motion} from 'framer-motion'

export default function ProductGallery({photo, gallery, setPhotoId}) {

    function handleSelectPhoto(id){
        setPhotoId(id)
    }

    return (
        <div className='relative flex flex-col gap-4 h-full lg:w-240'>
            {/* Photo */}
            <motion.div  className='overflow-hidden h-120 border border-gray-200 rounded-4xl lg:h-150'>
                <img src={photo?.url} alt='Capa do livro' className='h-full w-full object-cover'/>
            </motion.div>

            {/* Gallery */}
            <div className='relative grid grid-cols-4 grid-rows-1 gap-4 h-full'> 
                {gallery.map(item => {
                    return (
                        <div className='overflow-hidden border border-gray-200 rounded-2xl cursor-pointer' key={item?.id} onClick={() => handleSelectPhoto(item?.id)}>
                            <img src={item?.url} alt='Capa do livro' className='h-full w-full object-cover'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}