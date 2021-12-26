import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer  transition transform duration-500 hover:scale-110 ease-out">
      <div className='relative h-80 w-80'>
        <Image
          src={img}
          layout='fill'
          className='rounded-xl'
        />
      </div>
      <h3 className='font-semibold text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard
