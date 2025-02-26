import HeroImage from '../assets/heroimage.png'

const Hero = () => {
  return (
    <section className='text-center text-white items-center justify-center flex flex-col'>
      <h1 className='text-4xl lg:text-5xl md:text-5xl sm:text-[42px]  font-light'>let's fly <br /><span className='font-extrabold uppercase text-[65px] lg:text-9xl md:text-[115px] sm:text-[100px]'>together</span></h1>
      <img className='-mt-7 lg:-mt-12 md:-mt-10 sm:-mt-10' src={HeroImage} alt="Hero Image with 3 boys" />
    </section>
  )
}

export default Hero;