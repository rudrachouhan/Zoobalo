import hero from '../src/images/hero.jpg';
import tiffin from '../src/images/tiffin.jpg'
import tick from '../src/images/tick.png'
import whatsapp from '../src/images/whatsapp.png'
import insta from '../src/images/insta.png'
import net from '../src/images/net.png'



function App() {

  return (
    <>
      <div className='h-screen'>
        <div className='flex justify-between items-center py-4 px-4'>
          <div className='bg-orange-400 rounded-full px-3 py-8 ml-6'>
            <h1 className='text-white text-lg font-extrabold'>Zoobalo</h1>
          </div>
          <div className="flex space-x-20 text-orange-400 mr-12 mt-[-0.5rem]">
            <a href="/" className="text-xl font-bold">Home</a>
            <a href="#about" className="text-xl font-bold">About Us</a>
            <a href="#contact" className="text-xl font-bold">Contact Us</a>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-16">
            <div>
              <h1 className="text-xl text-orange-400 font-medium tracking-widest">OUR PRIORITY, YOURS SAFETY</h1>
              <h1 className="text-7xl font-extrabold text-orange-400">SAFE FOOD</h1>
              <h1 className="text-[5rem] font-light text-orange-400 mt-[-1rem]">FAST DELIVERY</h1>
              <a href="#about">
                <button className='px-5 py-3 rounded-2xl text-white bg-orange-500 mt-10 font-bold ml-2'>SEE MORE</button>
              </a>
            </div>
          </div>
          <div className='w-[45%]'>
            <img src={hero} className='bg-cover w-[80%] h-[80%] ml-8' alt="logo" />
          </div>
        </div>
      </div>

      {/* Mid Section  */}

      <div className='flex py-16' id='about'>
        <div className='w-[50%]'>
          <img src={tiffin} alt="tiffin-box" className='bg-contain w-[80%]' />
        </div>
        <div className='w-[50%] ml-8 mt-12'>
          <h1 className='text-orange-400 text-3xl font-semibold'>What We Offer</h1>
          <h1 className='w-[70%] mt-5 font-medium text-slate-400'>Our motto is to feed every college going student delicious and nutritious food which others are not providing. We offer home made food at affordable rates.</h1>
          <ul className='mt-10 ml-4 flex-col space-y-7'>
            <li className='flex items-center space-x-5'><img src={tick} className='w-10 h-10' /><h1 className='text-gray-400 text-2xl font-semibold'>Everyday new menu</h1></li>
            <li className='flex items-center space-x-5'><img src={tick} className='w-10 h-10' /><h1 className='text-gray-400 text-2xl font-semibold'>Two days special food in a week</h1></li>
            <li className='flex items-center space-x-5'><img src={tick} className='w-10 h-10' /><h1 className='text-gray-400 text-2xl font-semibold'>Fresh, Hygienic and Home made food</h1></li>
            <li className='flex items-center space-x-5'><img src={tick} className='w-10 h-10' /><h1 className='text-gray-400 text-2xl font-semibold'>Get exciting rewards and offers</h1></li>
          </ul>
        </div>
      </div>

      {/* Contact Section  */}
      <div className='bg-[#363636] w-full h-auto px-20 pt-24 pb-2' id='contact'>
        <div className=' text-white flex'>
          <div className='w-[60%]'>
            <h1 className='text-4xl font-bold'>
              ZOO<span className='text-4xl text-orange-400'>BALO</span>
            </h1>
            <h1 className='w-[60%] text-5xl font-bold mt-16'>
              The Best you can get at an Affordable Price
            </h1>
            <div className='flex space-x-3 mt-16 text-2xl font-semibold text-[#787878]'>
              BRING OUT CHANGE
            </div>
          </div>
          <div className='w-[40%] ml-24'>
            <div>
              <h1 className='text-2xl text-[#787878] font-extrabold'>CONTACTS</h1>
              <div className='flex space-x-3 mt-10'>
                <img src={whatsapp} className='w-10 h-10' />
                <h1 className='text-2xl font-semibold'>9509919001</h1>
              </div>
              <div className='flex space-x-3 mt-10'>
                <img src={insta} className='w-10 h-10' />
                <h1 className='text-2xl font-semibold'>zoobalo</h1>
              </div>
              <div className='flex space-x-3 mt-10'>
                <img src={net} className='w-10 h-10' />
                <h1 className='text-2xl font-semibold'>www.zoobalo.com</h1>
              </div>
            </div>
          </div>
        </div>
        <hr className='text-[#787878] mt-20' />
        <div className='flex justify-between'>
          <p className='text-[#787878] mt-6 mb-2'>Copyright © 2023. Zoobalo. All rights reserved.</p>
          <div className='flex space-x-2 mt-6 mb-2'>
            <a href="#" className='text-[#787878]'>Privacy Policy</a>
            <a href="#" className='text-[#787878]'>Terms &amp; Services</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
