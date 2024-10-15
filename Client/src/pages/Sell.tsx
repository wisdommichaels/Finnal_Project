import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Username from "../components/Username";
const Sell = () => {
  return (
    <div>
        <nav className="bg-[#161D6F] shadow-lg flex justify-between items-center ">
            <div className="containe mx-auto px-4 py-3 flex justify-between items-center sm:mx-14 w-full">
                 <Link to={"/"} className="signup-button px-5 flex justify-center items-center gap-2 text-[11px] py-2 ">
                  <svg fill="#000000" width="10px" height="10px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"/></svg>
                  BACK
               </Link>
     
             <Username/>
           </div>
        </nav>

    <section  className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:flex justify-center items-center w-[95%] sm:w-full m-auto my-2 sm:my-0 rounded-lg sm:rounded-none sm:p-7">
      <div  className="sm:w-1/2 mx-auto p-4 ">
        <h2  className="sm:text-2xl text-[16px] font-bold text-[#161D6F] text-center mb-4">GIFT CARD DETAILS</h2>
    
        <form id="gift-card- htmlForm"  className="w-full space-y-4 ">
        <div  className="sm:flex justify-center items-center gap-5">
          <div  className="sm:mb-0 mb-2 text-center sm:w-1/2">
            <label  htmlFor="category"  className="text-sm text-center text-[#161D6F] sm:text-[16px]">Gift Card Category</label>
            <select id="category" name="category"  className="custom-select custom-arrow w-full">
              <option value="">Select Category</option>
              <option value="Razer">Razer Gift Card</option>
              <option value="Amazon">Amazon</option>
              <option value="iTunes">Apple&iTunes</option>
              <option value="Google Play">Google Play</option>
              <option value="Steam">Steam</option>
              <option value="Walmart">Walmart</option>
              <option value="MasterCard">MasterCard</option>
              <option value="PlayStation">PlayStation</option>
              <option value="eBay">eBay Gift card</option>
              <option value="American Express">American Express</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Visa">Visa</option>
            </select>
          </div>
    
          
          <div  className="sm:mb-0 mb-2 text-center sm:w-1/2">
            <label  htmlFor="country"  className="text-sm text-[#161D6F] sm:text-[16px]  text-center">Country/Currency Code</label>
            <select id="country" name="country"  className="custom-select custom-arrow w-full">
              <option value="">Select Country</option>
              <option value="United States">USA/USD</option>
              <option value="United Kingdom">UK/EUR</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
    
        <div  className="sm:flex justify-center items-center w-full gap-5">
    
          <div  className="sm:mb-0 mb-2  text-center sm:w-1/2">
            <label  htmlFor="cardNumber"  className="text-sm text-[#161D6F] sm:text-[16px]">Gift Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter Gift Card Number"  className=" custom-select custom-arrow w-full cursor-text"/>
          </div>
         
          <div  className="sm:mb-0 mb-2  text-center sm:w-1/2">
            <label  htmlFor="giftCardImage"  className="text-sm m-auto text-[#161D6F] sm:text-[16px]">Gift Card Image</label>
            <input type="file" id="giftCardImage" name="giftCardImage" accept="image/*"  className=" custom-select custom-arrow cursor-text w-full"/>
          </div>
        </div>
        
          <div  className="text-center">
            <button type="submit"  className="btnn text-[14px] sm:text-[16px] w-full">Sell</button>
          </div>
        </form>
      </div>
    
    </section>  

    {/* <section  className="container mx-auto p-4">
        <h1  className="text-2xl font-bold text-center mb-6 text-[#161D6F]">Transaction History</h1>
    
        <div  className="overflow-x-auto rounded-xl">
          <table  className="min-w-full bg-white border shadow-lg rounded-xl">
            <thead>
              <tr  className="bg-[#161D6F] text-white text-center text-sm leading-normal rounded-xl">
                  <th  className="py-3 px-4">Gift Card</th>
                  <th  className="py-3 px-1">Amount</th>
                  <th  className="py-3 px-8">Date</th>
                <th  className="py-3 px-8">Status</th>
              </tr>
            </thead>
            <tbody  className="text-black text-sm">
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Amazon</td>
                  <td  className="py-3 px-4">$100</td>
                  <td  className="py-3 px-4">2024-09-20</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">iTunes</td>
                  <td  className="py-3 px-4">$50</td>
                  <td  className="py-3 px-4">2024-09-18</td>
                <td  className="py-3 px-4">
                  <span  className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Pending</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Google Play</td>
                  <td  className="py-3 px-4">$25</td>
                  <td  className="py-3 px-4">2024-09-15</td>
                <td  className="py-3 px-4">
                  <span  className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">Failed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Walmart</td>
                  <td  className="py-3 px-4">$250</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Razer Gold</td>
                  <td  className="py-3 px-4">$150</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Steam</td>
                  <td  className="py-3 px-4">$1000</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Vanilla</td>
                  <td  className="py-3 px-4">$10</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                  <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}
      <Footer/>
    </div>
  )
}

export default Sell