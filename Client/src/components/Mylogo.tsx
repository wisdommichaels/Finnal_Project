

const Mylogo = () => {
  return (
    <div>
      <div className="flex justify-center items-center cursor-pointer">
        <img className="sm:w-[100px] sm:h-[100px] w-[55px] h-[55px] sm:pb-12" src="src\assets\mylogo.png" alt="" />
        <div className="flex-col justify-center items-center leading-3 sm:leading-4 sm:pb-9 pt-[12px] sm:p-0">
        <h1 className="font-bold sm:text-[24px] text-[14] sm:text-[#161D6F] text-white">GiftHub</h1>
        <p className="sm:text-[8px] text-[5.8px] sm:text-[#161D6F] font-bold text-center text-white">Exchange with Ease</p>
        </div>
      </div>

    </div>

  )
}

export default Mylogo