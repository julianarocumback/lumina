import {motion} from 'framer-motion'

const Card = ({testimonials, cardVariants}) => {
    return (
        testimonials.map(testimonial => {
            return (
                <motion.div variants={cardVariants} key={testimonial.id} className='snap-center snap-always flex flex-col shrink-0 gap-8 w-70 h-70 p-8 bg-[#FAFAFA] bg-[radial-gradient(at_100%_0%,rgba(0,99,154,0.1),transparent_50%)] border border-[#f0f0f0] rounded-xl'>
                    
                    <p className='text-base text-left text-[#1E293B]'><q>{testimonial.testimonial}</q></p>
                    <div className='flex items-center gap-2 my-auto'>
                        <div className='text-2xl'>{testimonial.img}</div>
                        <div className='flex flex-col text-left'>
                            <span className='text-sm font-semibold text-[#0F172A] '>{testimonial.name}</span>
                            <span className='text-[8px] text-[#2563EB]'>{testimonial.label}</span>
                        </div>
                    </div>
                </motion.div>
            )
        })
    )
}

export default Card