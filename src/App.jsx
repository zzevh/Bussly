import './styles/index.css'

import LogoYeloow from './assets/logoyeloow.png'

import Hero from './sections/Hero'
import Partner1Image from './assets/partner1.png'
import Partner2Image from './assets/partner2.png'
import Partner3Image from './assets/partner3.png'

import PartnerSonyImage from './assets/partners/sony.png'
import PartnerPakistanImage from './assets/partners/pakistan.png'
import PartnerIbaImage from './assets/partners/iba.png'
import PartnerWebxImage from './assets/partners/webx.png'

import Blaze from './assets/jawadll.png'

import D1 from './assets/d1.png'
import D2 from './assets/d2.png'
import D3 from './assets/d3.png'

import WhoWeAreImage from './assets/whowe.png'
import OurMissionImage from './assets/ourmission.png'

function App() {
  return (
    <div className='w-full h-full'>
      <Hero />
      <section className='bg-black text-white rounded-t-[80px] lg:rounded-t-[200px] md:rounded-t-[120px] sm:rounded-t-[100px] min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <div className='text-start mt-50 mb-45'>
          <p className='text-2xl ml-1 lg:text-3xl md:text-[30px] md:ml-1'>WE ARE A</p>
          <h2 className='uppercase font-extrabold text-6xl text-[#F9CC0D] lg:text-9xl md:text-8xl sm:text-7xl'>FULL STACK</h2>
          <h2 className='uppercase font-extrabold text-[33.7px] ml-[1px] -mt-4 lg:text-7xl md:text-[54px] md:ml-0.5 sm:text-[40px] sm:ml-0.5 sm:-mt-2'>MARKETING AGENCY</h2>
        </div>

        <section className='mb-45'>
          <h3 className='uppercase text-[38px] -mb-8 lg:text-6xl md:text-5xl sm:text-5xl font-bold  lg:block'>Official <span className='text-[#F9CC0D]'>Partners</span></h3>
          <div className='flex items-center justify-center gap-8 bg-[#FEC200] py-5 px-5 mt-14 rounded-2xl lg:px-20 lg:py-5 md:px-15 md:py-4 sm:px-15'>
            <img src={Partner1Image} className='w-[100px] md:w-[150px] sm:w-[130px]' alt="" />
            <img src={Partner2Image} className='w-[100px] md:w-[150px] sm:w-[130px]' alt="" />
            <img src={Partner3Image} className='w-[100px] md:w-[150px] sm:w-[130px]' alt="" />
          </div>
        </section>

        <section className='mt-30 mb-45'>
          <div className='flex flex-col md:flex-row justify-center items-center'>
            <h4 className='uppercase lg:text-9xl font-black text-[#F9CC0D] hidden lg:block'>Who</h4>
            <h4 className='uppercase lg:text-5xl font-extrabold md:ml-4 hidden lg:block'>We <br /> <span className='-mr-8'>are?</span></h4>
            <img src={WhoWeAreImage} className='block lg:hidden' alt="Who We Are" />
          </div>
          <p className='mt-7 w-full md:w-3/4 text-lg mx-auto lg:hidden'>We are a full-stack marketing agency with proven experience of 7+ years. we take pride in our founders having experience in scaling and helping Pakistani and international brands to become what they have been thriving for years. our team is qualified in marketing, branding, and development we create brands that scale </p>
          <p className='mt-7 w-full md:w-3/4 text-lg mx-auto hidden lg:block'>We are a full-stack marketing agency with proven experience of 7+ years. we take pride in our founders having experience in scaling and helping Pakistani and international brands to become what they have been thriving for years. our team is qualified in marketing, branding, and development we create brands that scale </p>
        </section>

        <section className="mb-45 items-center">
          <div className='flex flex-col md:flex-row'>
            <h5 className="text-white font-bold lg:text-[45px] ml-32 uppercase rotate-90 hidden lg:block">OUR</h5>
            <h5 className="text-[#F9CC0D] font-black lg:text-9xl uppercase hidden ml-5 lg:block">MISSION</h5>
            <img src={OurMissionImage} className='block w-140 items-center justify-center lg:hidden' alt="Our Mission" />
          </div>
          <div className='uppercase text-center justify-center items-center'>
            <p className='text-xl w-full md:w-3/4 mx-auto mt-7 hidden lg:block'>Our Mission is to help business to scale their business and to grow beyond their expectation.</p>
            <p className='text-xl w-full md:w-3/4 mx-auto mt-7 lg:hidden'>Our Mission is to help business to scale their business and to grow beyond their expectation.</p>
          </div>
        </section>

        <section className="mb-45 hidden lg:block">
          <h6 className="uppercase text-6xl font-extrabold text-center">
            The <span className="text-[#F9CC0D]">opportunity</span>
          </h6>
          <h6 className="uppercase text-6xl font-extrabold text-center">
            you are <span className="text-[#F9CC0D]">missing</span>!
          </h6>
          <p className='-mb-27 mt-20 uppercase text-center'>ad spending social media in million usd (us$)</p>
          <div className="flex flex-wrap justify-center mt-30 gap-3">
            <div>
              <div className='bg-[#FFBE32] py-8 px-8 rounded-b-2xl'> </div>
              <p>13.63</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-8 px-8 rounded-b-2xl'> </div>
              <p>20.21</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-10 px-8 rounded-b-2xl'> </div>
              <p>22.02</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-12 px-8 rounded-b-2xl'> </div>
              <p>24.57</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-15 px-8 rounded-b-2xl'> </div>
              <p>29.48</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-17 px-8 rounded-b-2xl'> </div>
              <p>36.41</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-19 px-8 rounded-b-2xl'> </div>
              <p>44.28</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-23 px-8 rounded-b-2xl'> </div>
              <p>51.01</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-25 px-8 rounded-b-2xl'> </div>
              <p>57.20</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-28 px-8 rounded-b-2xl'> </div>
              <p>63.97</p>
            </div>
            <div>
              <div className='bg-[#FFBE32] py-31 px-8 rounded-b-2xl'> </div>
              <p>71.21</p>
            </div>
          </div>
        </section>

        <section className='mb-45'>
          <h6 className='uppercase text-3xl lg:text-7xl font-extrabold text-center'>OUR <br /> <span className='text-[#F9CC0D]'>delightsome <br /></span>clients</h6>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-15'>
            <img className='w-60' src={PartnerPakistanImage} alt="" />
            <img className='w-60' src={PartnerSonyImage} alt="" />
            <img className='w-60' src={PartnerIbaImage} alt="" />
            <img className='w-60' src={PartnerWebxImage} alt="" />
            <img className='w-60' src={PartnerIbaImage} alt="" />
            <img className='w-60' src={PartnerPakistanImage} alt="" />
            <img className='w-60' src={PartnerSonyImage} alt="" />
            <img className='w-60' src={PartnerPakistanImage} alt="" />
            <img className='w-60' src={PartnerWebxImage} alt="" />
            <img className='w-60' src={PartnerPakistanImage} alt="" />
            <img className='w-60' src={PartnerIbaImage} alt="" />
            <img className='w-60' src={PartnerWebxImage} alt="" />
          </div>
        </section>

        <section className='mb-45'>
          <h6 className='uppercase text-2xl  lg:text-7xl font-extrabold mb-15 text-center'>the team that makes <br /> the <span className='text-[#F9CC0D]'>magic</span> happen!</h6>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='items-center text-center'>
              <img className='w-70' src={Blaze} alt="" />
              <h6 className='text-2xl font-medium'>Blaze Kruph</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>CEO-Founder</p>
            </div>
            <div className='items-center text-center'>
              <img className='w-70' src={D1} alt="" />
              <h6 className='text-2xl font-medium'>Bilal Ahmed</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>co-founder</p>
            </div>
            <div className='items-center text-center'>
              <img className='w-70' src={D2} alt="" />
              <h6 className='text-2xl font-medium'>Muhammad Anas</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>co-founder</p>
            </div>
            <div className='items-center text-center'>
              <img className='w-70' src={D3} alt="" />
              <h6 className='text-2xl font-medium'>Muhammad Anas</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>co-founder</p>
            </div>
            <div className='items-center text-center'>
              <img className='w-70' src={Blaze} alt="" />
              <h6 className='text-2xl font-medium'>Muhammad Anas</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>co-founder</p>
            </div>
            <div className='items-center text-center'>
              <img className='w-70' src={D3} alt="" />
              <h6 className='text-2xl font-medium'>Muhammad Anas</h6>
              <p className='uppercase text-lg text-[#F9CC0D]'>cmo-marketing wizard</p>
              <p className='uppercase text-lg text-[#F9CC0D]'>co-founder</p>
            </div>
          </div>
        </section>
      </section>

      <footer className="bg-black font-sans dark:bg-black px-4 md:px-32">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get an update.</h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" className="px-4 py-2 text-white bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-yellow-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-500 hover:underline hover:cursor-pointer hover:text-yellow-500">Home</p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-500 hover:underline hover:cursor-pointer hover:text-yellow-500">Who We Are</p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-500 hover:underline hover:cursor-pointer hover:text-yellow-500">Our Philosophy</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:underline hover:cursor-pointer hover:text-yellow-500">Retail & E-Commerce</p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:underline hover:cursor-pointer hover:text-yellow-500">Information Technology</p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-yellow-400 hover:underline hover:cursor-pointer hover:text-yellow-500">Finance & Insurance</p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img src={LogoYeloow} width="130" height="110" alt="" />
            </div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
              <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
              <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
              <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
              <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
              <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
              <img src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
          </div>
          <p className="text-white font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2025 Bussly Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
