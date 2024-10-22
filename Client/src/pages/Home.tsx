
import Footer from "../components/Footer"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Dropdown from "../components/Dropdown"
import { useCardStore } from "../store/cardStore"
import { useEffect } from "react"

const Home = () => {
  const { cards } = useCardStore()

  useEffect(() => console.log(cards),[])

    const revealOnScroll = () => {      
      const triggerBottom = window.innerHeight * 0.85;
      const cards = document.querySelectorAll('.scroll-card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // dropdown menu
    document.querySelector('.dropdown')?.addEventListener('click', function() {
      const menu = document.querySelector('.dropdown-menu') as HTMLElement | null;
      if (menu) {
        menu.classList.toggle('hidden');
      }
    });

    
  
  return (
    <div>
<section id="black">
       <Mobileheader/>
  <section className="sm:hidden">
    <h1 className="hidden sm:text-[50px] bg-gradient-to-r from-[#a2bae3] to-[#668bc2] text-[16px] font-bold p-2 text-white text-center mb-0">Trade your <span className="text-[#161D6F]">Gift Card</span> all in <br/> one place</h1>
    <h1 className="sm:text-[50px] bg-gradient-to-r from-[#a2bae3] to-[#668bc2] text-[16px] font-bold p-2 pt-3 text-white text-center mb-0">Trade your <span className="text-[#161D6F]">Gift Card</span> all in one place</h1>
    <div className="flex-col justify-center items-center mb-3 bg-gradient-to-r from-[#a2bae3] to-[#668bc2] rounded-b-lg">
    <div className="w-[80%] rounded-lg gap-2 shadow-sm mb-3 py-1 m-auto flex justify-start items-center bg-white">
      <div className="flex items-center  pointer-events-none bg-white pl-5 rounded-lg ">
        <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 50 50" 
        width="20px" 
        height="20px">
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
        </svg>
      </div>
      <input className="border-none py-1 cursor-text w-full focus:outline-none " type="text" placeholder="Search gift cards..."/> 
    </div>
    <div className="flex justify-center items-center pb-5">
      <Dropdown/>
    </div>
  </div>
  </section>
    <div className="card hidden sm:flex">
      <div className="top-section">
        <div className="border"></div>
    <div className="icons">
      <div className="logo">
      <Mylogo/>
      </div>
      <Navbar/>
        <Username/>
      </div>
      <div className=" flex flex-col justify-center items-center w-full p-10 mb-6">
            <h1 className="sm:text-[50px] text-[16px] font-bold pt-8 text-white mb-4 text-center">Trade your <span className="text-[#E7500F] underline">Gift Card</span> all in <br/> one place</h1>
            
          <div className="searchbar w-[50%] gap-2 mb-6 flex justify-start items-center">
            <div className="flex items-center pointer-events-none bg-white  ">
              <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg"  
               viewBox="0 0 50 50" 
               width="25px" 
               height="25px">
               <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
             </svg>
            </div>
            <input className="w-full focus:outline-none"  type="text" placeholder="Search gift cards..."/> 
          </div>
          <Dropdown/>
  </div>
    </div>
  </div>
</section>
<section>
  <div className="section-title flex justify-center items-center bg-[#161D6F] sm:w-[20%] w-[60%] shadow-md shadow-slate-500 m-auto rounded-md p-3 mb-3">
    <h1 className="font-bold text-[12px] sm:text-[14px] text-white">Gift Cards</h1>
  </div>
</section>
<section className="section min-h-screen bg-[#F5F5FA] sm:rounded-[40px] rounded-xl m-auto w-[98%] mb-8 px-5 sm:p-0">
  <div className="flex flex-wrap justify-center items-center gap-8 py-8  mt-4 rounded-2xl">
    {cards?.map((card) =>
      <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src={card.imageUrl} alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-[16px] font-semibold">{card.name} Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1" src="src/assets/tag.png" alt=""/>
                  <p className="text-white mt-2 font-bold">{card.rates[0].rateDetails.countryName} ₦{card.rates[0].value}</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>)
    }    
  </div>
</section>
<Footer/>

    </div>
  )
}

export default Home