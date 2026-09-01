import Card from './card/Card'


export default function Comment(){
    return (
        <div className='relative flex-1 md:overflow-y-auto  h-full text-sm'>
            <div className='flex flex-col gap-4'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}