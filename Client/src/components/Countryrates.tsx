import { Link } from "react-router-dom"
import { useState } from "react"

const Countryrates: React.FC = () => {
    // State to control whether the additional rows are shown or hidden
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility and button text
    const handleToggle = () => {
      setIsVisible(!isVisible); // Toggle visibility
    };
  return (
    <div>
    <section  className="w-full sm:w-[98%] h-100vh mx-auto bg-white p-5 pt-10 sm:p-8 sm:shadow-lg sm:rounded-b-lg">
    
      <div  className="flex gap-5 justify-between sm:justify-normal items-center sm:mb-4 mb-1 text-[9px] sm:text-[16px] text-center sm:text-left">
        <div  className="font-bold text-gray-600 flex justify-start sm:w-[25%] sm:pl-8 ">Country</div>
        <div  className="font-bold text-gray-600 flex justify-center sm:w-[25%] sm:pl-6 pr-">Currency Code</div>
        <div  className="font-bold text-gray-600 flex justify-end sm:w-[25%] sm:pr-2 pr-6">Gift Card Rate</div>
      </div>

        <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
                <svg  className="w-[40%] sm:w-[9%]" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                >
                <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#fff"
              ></rect>
              <path
                d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                fill="#a62842"
              ></path>
              <path
              d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
              fill="#a62842"
              ></path>
              <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
              <path
              fill="#a62842"
              d="M2 15.077H31V16.923000000000002H2z"
              ></path>
              <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
              <path
              d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
              fill="#a62842"
              ></path>
              <path
              d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
              fill="#a62842"
              ></path>
              <path
              d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
              fill="#102d5e"
              ></path>
              <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                fill="#fff"
                d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                ></path>
              <path
                fill="#fff"
                d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                ></path>
                <path
                fill="#fff"
                d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                ></path>
                <path
                fill="#fff"
                d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                ></path>
                <path
                fill="#fff"
                d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                ></path>
                <path
                fill="#fff"
                d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                ></path>
                <path
                fill="#fff"
                d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
              ></path>
              <path
                fill="#fff"
                d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
              ></path>
              <path
                fill="#fff"
                d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                ></path>
                <path
                fill="#fff"
                d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                ></path>
              <path
                fill="#fff"
                d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
              ></path>
              <path
                fill="#fff"
                d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
              ></path>
              <path
              fill="#fff"
              d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
              ></path>
              <path
              fill="#fff"
              d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
              ></path>
              <path
              fill="#fff"
              d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
              ></path>
              <path
              fill="#fff"
              d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
              ></path>
              <path
              fill="#fff"
              d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
              ></path>
              <path
              fill="#fff"
              d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
              ></path>
            </svg>
            United States
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">USD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦1200</span>
                  <Link to={'/sell'} 
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
              Sell
            </Link>
          </div>
          </Link>
    </div>
     <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#071b65"
              ></rect>
              <path
                d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                fill="#fff"
              ></path>
              <path
                d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                fill="#b92932"
              ></path>
              <path
                d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                fill="#b92932"
              ></path>
              <path
                d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                fill="#fff"
              ></path>
              <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
              <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
              <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
              <rect
                x="14"
                y="1"
                width="4"
                height="30"
                transform="translate(32) rotate(90)"
                fill="#b92932"
              ></rect>
              <path
                d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                fill="#b92932"
              ></path>
              <path
                d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                fill="#b92932"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            United Kingdom
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">GBP</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">£1 = ₦1200</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1" >
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V15H1v9Z"
                fill="#fff"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z"
                fill="#db3c3f"
              ></path>
              <path
                d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                d="M6.811,10.5c0-1.898,1.321-3.487,3.094-3.897-.291-.067-.594-.103-.906-.103-2.209,0-4,1.791-4,4s1.791,4,4,4c.311,0,.615-.036,.906-.103-1.773-.41-3.094-1.999-3.094-3.897Z"
                fill="#fff"
              ></path>
              <path
                fill="#fff"
                d="M10.81 8.329L10.576 9.048 11.189 8.603 11.801 9.048 11.567 8.329 12.179 7.884 11.423 7.884 11.189 7.164 10.955 7.884 10.198 7.884 10.81 8.329z"
              ></path>
              <path
                fill="#fff"
                d="M14.361 9.469L13.605 9.469 13.371 8.749 13.137 9.469 12.38 9.469 12.992 9.914 12.759 10.634 13.371 10.189 13.983 10.634 13.749 9.914 14.361 9.469z"
              ></path>
              <path
                fill="#fff"
                d="M10.074 12.034L9.84 11.315 9.606 12.034 8.85 12.034 9.462 12.479 9.228 13.199 9.84 12.754 10.452 13.199 10.218 12.479 10.831 12.034 10.074 12.034z"
              ></path>
              <path
                fill="#fff"
                d="M12.771 12.034L12.537 11.315 12.303 12.034 11.547 12.034 12.159 12.479 11.925 13.199 12.537 12.754 13.149 13.199 12.916 12.479 13.528 12.034 12.771 12.034z"
              ></path>
              <path
                fill="#fff"
                d="M9.24 9.469L9.007 8.75 8.773 9.469 8.016 9.469 8.628 9.914 8.394 10.634 9.007 10.189 9.619 10.634 9.385 9.914 9.997 9.469 9.24 9.469z"
              ></path>
            </svg>
            Singapore
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">SGD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦1200</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#db362f"
              ></rect>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <polygon
                points="17.303 9.577 17.303 9.577 17.303 9.577 17.303 9.577"
                fill="#fff"
              ></polygon>
              <path
                d="M17.303,9.577c-1.568-.243-3.097,.628-3.687,2.101-.7,1.748,.149,3.732,1.897,4.432-.159-.143-.23-.35-.313-.547-.314-.742,.033-1.598,.775-1.911,.092-.039,.181-.086,.264-.14,.79-.513,1.014-1.568,.501-2.358-.051-.078-.091-.163-.12-.253-.177-.554,.128-1.147,.682-1.325Z"
                fill="#fff"
              ></path>
              <path
                d="M19.319,12.819c-1.879-.126-3.504,1.295-3.629,3.174,.087-.195,.262-.327,.423-.467,.609-.528,1.53-.462,2.058,.147,.065,.076,.137,.145,.215,.208,.732,.592,1.805,.48,2.398-.252,.059-.073,.127-.137,.203-.192,.472-.34,1.131-.233,1.471,.239-.253-1.567-1.554-2.751-3.138-2.857Z"
                fill="#fff"
              ></path>
              <polygon
                points="22.457 15.676 22.457 15.676 22.457 15.676 22.457 15.676"
                fill="#fff"
              ></polygon>
              <path
                d="M15.783,16.324c.044,.209-.02,.419-.068,.627-.182,.785-.966,1.273-1.751,1.091-.097-.023-.197-.037-.296-.042-.94-.049-1.742,.673-1.792,1.613-.005,.093-.022,.186-.052,.275-.182,.553-.778,.853-1.33,.671,1.126,1.119,2.875,1.312,4.218,.467,1.594-1.003,2.073-3.107,1.07-4.701Z"
                fill="#fff"
              ></path>
              <path
                d="M19.997,18.596c-.461-1.826-2.315-2.932-4.14-2.471,.212,.022,.392,.148,.575,.258,.69,.416,.912,1.312,.496,2.002-.052,.086-.096,.176-.131,.269-.337,.879,.102,1.865,.98,2.202,.087,.034,.17,.079,.245,.134,.469,.344,.571,1.003,.227,1.473,1.412-.725,2.136-2.329,1.748-3.867Z"
                fill="#fff"
              ></path>
              <path
                d="M14.954,16.445c-.803,.069-1.509-.525-1.578-1.328-.009-.1-.026-.198-.052-.295-.244-.909-1.178-1.449-2.088-1.205-.09,.024-.184,.036-.277,.036-.582-.003-1.051-.476-1.049-1.058h0c-.716,1.416-.36,3.14,.859,4.156,1.446,1.206,3.596,1.011,4.802-.435-.185,.107-.404,.111-.617,.129Z"
                fill="#fff"
              ></path>
            </svg>
            Hong Kong
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">HKD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦100</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>
       
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#fff" d="M8 4H24V28H8z"></path>
              <path
                d="M5,4h4V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                fill="#c53a28"
              ></path>
              <path
                d="M27,4h4V28h-4c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 27 16)"
                fill="#c53a28"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M16.275,22.167l-.138-2.641c-.007-.16,.117-.296,.277-.304,.021,0,.042,0,.063,.004l2.629,.462-.355-.979c-.03-.08-.005-.17,.061-.223l2.88-2.332-.649-.303c-.091-.043-.135-.146-.104-.242l.569-1.751-1.659,.352c-.093,.019-.186-.029-.223-.116l-.321-.756-1.295,1.389c-.076,.08-.201,.083-.281,.007-.049-.047-.071-.115-.058-.182l.624-3.22-1.001,.578c-.095,.056-.217,.024-.272-.071-.002-.004-.004-.008-.006-.012l-1.016-1.995-1.016,1.995c-.049,.098-.169,.138-.267,.089-.004-.002-.008-.004-.012-.006l-1.001-.578,.624,3.22c.021,.108-.05,.212-.158,.233-.067,.013-.135-.009-.182-.058l-1.295-1.389-.321,.756c-.037,.087-.131,.136-.223,.116l-1.659-.352,.569,1.751c.031,.095-.013,.199-.104,.242l-.649,.303,2.88,2.332c.066,.054,.091,.144,.061,.223l-.355,.979,2.629-.462c.158-.027,.309,.079,.336,.237,.004,.021,.005,.042,.004,.063l-.138,2.641h.551Z"
                fill="#c53a28"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            Canada
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">CAD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦1000</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>
    
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1" >
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#061b65"
              ></rect>
              <path
                d="M6.5,13.774v2.226h4v-2.227l3.037,2.227h2.463v-1.241l-3.762-2.759h3.762v-4h-2.74l2.74-2.009v-1.991h-1.441l-4.059,2.977v-2.977H6.5v2.794l-3.257-2.389c-.767,.374-1.389,.983-1.786,1.738l2.532,1.858H1s0,0,0,0v4h3.763l-3.763,2.76v1.24H3.464l3.036-2.226Z"
                fill="#fff"
              ></path>
              <path
                d="M1.805,5.589l3.285,2.411h1.364L2.359,4.995c-.204,.18-.39,.377-.554,.594Z"
                fill="#d22d32"
              ></path>
              <path
                fill="#d22d32"
                d="M1 16L6.454 12 6.454 13 2.363 16 1 16z"
              ></path>
              <path
                id="1705926025352-5861297_Star7"
                d="M6.838,18.741l.536,1.666,1.636-.62-.968,1.457,1.505,.893-1.743,.152,.24,1.733-1.205-1.268-1.205,1.268,.24-1.733-1.743-.152,1.505-.893-.968-1.457,1.636,.62,.536-1.666Z"
                fill="#fff"
              ></path>
              <path
                id="1705926025352-5861297_Star7-2"
                d="M23.113,21.755l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z"
                fill="#fff"
              ></path>
              <path
                id="1705926025352-5861297_Star7-3"
                d="M20.166,13.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z"
                fill="#fff"
              ></path>
              <path
                id="1705926025352-5861297_Star7-4"
                d="M23.43,7.127l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z"
                fill="#fff"
              ></path>
              <path
                id="1705926025352-5861297_Star7-5"
                d="M28.132,10.817l.291,.906,.89-.337-.527,.793,.819,.486-.948,.082,.131,.943-.656-.69-.656,.69,.131-.943-.948-.082,.819-.486-.527-.793,.89,.337,.291-.906Z"
                fill="#fff"
              ></path>
              <path
                id="1705926025352-5861297_Star5"
                d="M25.742,16l.23,.565,.608,.045-.466,.393,.146,.592-.518-.321-.518,.321,.146-.592-.466-.393,.608-.045,.23-.565Z"
                fill="#fff"
              ></path>
              <path
                fill="#d22d32"
                d="M9.5 16L7.5 16 7.5 11 1 11 1 9 7.5 9 7.5 4 9.5 4 9.5 9 16 9 16 11 9.5 11 9.5 16z"
              ></path>
              <path
                fill="#d22d32"
                d="M16 15.667L11 12 11 13 15.091 16 16 16 16 15.667z"
              ></path>
              <path
                fill="#d22d32"
                d="M16 4L15.752 4 10.291 8.004 11.655 8.004 16 4.818 16 4z"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            Australia
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">AUD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦800</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1" >
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#fff" d="M10 4H22V28H10z"></path>
              <path
                d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                fill="#2c6748"
              ></path>
              <path
                d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 26 16)"
                fill="#be2a2c"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                fill="#bb3433"
                d="M17.875 19.221L17.874 19.221 17.875 19.221 17.875 19.221z"
              ></path>
              <path
                fill="#bb3433"
                d="M19.08 17.788L19.08 17.788 19.08 17.788 19.08 17.788z"
              ></path>
              <path
                fill="#bb3433"
                d="M15.938 18.943L15.938 18.944 15.938 18.944 15.938 18.943z"
              ></path>
              <path
                fill="#bb3433"
                d="M16.305 19.76L16.305 19.76 16.305 19.76 16.305 19.76z"
              ></path>
              <path
                fill="#854a29"
                d="M16.196 16.434L16.196 16.434 16.196 16.434 16.196 16.434z"
              ></path>
              <path d="M14.757,12.878h0s0,0,0,0Z" fill="#854a29"></path>
              <path
                fill="#854a29"
                d="M15.137 12.715L15.137 12.715 15.137 12.715 15.137 12.715z"
              ></path>
              <path
                d="M18.701,18.611c-.462-.69-.74,.319-1.215,.252,.125-.81-.778-.5-1.196-.312l.165-.241c-.625,.291-1.368-.712-1.816,.028-.095-.205-.882-.689-1.201-.328,.025-1.017-1.723-.957-.807,.081,.63,.179,.975,.964,1.915,.554,.129,.53,1.025,.583,1.413,.297-.052,.161-.027,.622-.041,.715,.479,.384,.485-.223,.822-.414,.489-.25,2.275,.502,1.96-.631Z"
                fill="#3b8288"
              ></path>
              <path
                d="M14.624,17.264s.004,.003,.012,.007c-.007-.004-.011-.007-.012-.007h0Z"
                fill="#a27037"
              ></path>
              <path
                d="M18.215,13.019c.002-.497-3.62-1.554-2.526,.068-.258,.037-.691-.15-.712-.352,0,0,0,0,0,0,0,0,0,0,0,0,.015,.04-.11,.248-.151,.267-.006-.1-.03-.192-.03-.192v.004c-.125-.31-.028,.433-.249,.37,.076-.029,.006-.364-.052-.32,.037,.024-.047,.41-.121,.427,.045-.065-.042-.324-.062-.272,0,0,0,0,0,0,.063,.263-.45,.571-.376,.701-.336,.119-.481,.946,.12,.757-.256-.134-.135-.469,.172-.434-.014-.003,.043,.021,.027,.032,.079,.371,.485-.072,.645-.128-.169,.942-.602,1.836,.288,2.773-.295-.311-.349,.054-.016,.163-.201,.01-.431,.205-.085,.313-.071,.072-.345-.137-.195,.009-.003-.001-.006-.003-.009-.004,0,0,.002,.002,.006,.005-.572-.025-.025,.2,.214,.222-.194,.305,.482,.023,.548,.016,0,0,0,0,0,0,.133,.335,.238,.032,.208-.217,.095,.109,.19,.217,.287,.324h0s0,0,0,0h0c.152,.041,.318,.718,.432,.365,.004-.014,.006-.028,.008-.042,.226,.254,.334,.35,.235-.053,.123,.202,.233,.26,.201-.004,.186,.195,.137-.07,.118-.206,.179,.711,1.985,.561,1.799,.083-.312-.304-2.294-1.415-1.782-2.109,.194,.099,1.156,1.304,.738,.599-.371-.965,.316,0,.418,.358,.23,.415-.128-.724-.204-.764,.635,.793,.576,1.491,.375,.027,.025,.048,.066,.086,.116,.105-.037-.074-.08-.103-.104-.114,.039,.009,.087,.068,.107,.115-.001,0-.002,0-.003-.001,.339,1.803,.462,1.494,.249-.132,.512,2.02,.44,2.008,.384-.037,.367,.526,.103,1.624,.26,2.125,.274-.584,.176-2.301,.355-2.761-.337-.32-1.113-2.012-1.631-2.085Zm-2.889,4.239s0-.001,0-.002h.002s-.001,.001-.002,.002Z"
                fill="#a27037"
              ></path>
              <path
                d="M14.715,16.587c.079-.641-.499-.553-.914-.554-.811-.68,1.523-1.254,.432-1.993h.004s-.008-.002-.007-.002l.007,.002s-.023-.023-.022-.023c-.094,.015-.235,.019-.282,.136,0,0,.003,.002,.006,.005l-.126,.148c0,.006,.21,.147,.201,.157,.008-.002,.019,.009,.025,.013,.11,.347-.585,.486-.724,.802-.445,.914,.373,1.211,1.023,1.217-.875,.946-.794,.138-1.382-.416,.083-.354,.237-.801-.251-.948,.003-.079-.13-.161-.165-.041,.033-.034-.086-.136-.135-.069-.19-.243-.413,.369-.078,.307,.008,.075,.133,.04,.152,.023-.003,.095,.142,.085,.161,.025,.33,.191-.146,.548,.001,.847,.195,.36,.548,.505,.559,.978,.29,.474,1.476-.153,1.506-.487,.005-.039,.007-.081,.01-.123h0Zm-.254-1.951s.004,.004,.005,.005h0s-.004-.003-.006-.005h0Zm-.572,.62s0,0,0,0c0,0,0,0,0,0h0Z"
                fill="#a9ac78"
              ></path>
              <path
                d="M13.746,13.936c.005,.021-.459,.125-.392-.081,.088,.028,.498-.271,.332-.237-.458,.313-.307-.073-.156-.339,.045,.015,.052,.236,.028,.25,.133-.089,.077-.573-.109-.321-.182-.073-.67,.401-.397,.595-.096,.419,.233,.596,.585,.507l.002-.006h.031c-.052-.007,.077-.344,.076-.367Z"
                fill="#a9ac78"
              ></path>
            </svg>
            Mexico
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">MXN</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1 = ₦50</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1" >
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#fff" d="M10 4H22V28H10z"></path>
              <path
                d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                fill="#092050"
              ></path>
              <path
                d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 26 16)"
                fill="#be2a2c"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            France
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#e93323"
              ></rect>
              <path
                d="M5,4H16v12H1V8c0-2.208,1.792-4,4-4Z"
                fill="#020090"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                d="M6.664,8.859l-1.953-.523,1.429,1.429c.109-.339,.29-.647,.524-.906Z"
                fill="#fff"
              ></path>
              <path
                d="M8.5,8.044c.179,0,.354,.02,.523,.056l-.523-1.952-.523,1.952c.169-.036,.344-.056,.523-.056Z"
                fill="#fff"
              ></path>
              <path
                d="M7.741,8.163l-1.429-1.429,.523,1.953c.258-.234,.566-.415,.906-.524Z"
                fill="#fff"
              ></path>
              <path
                d="M10.164,8.687l.523-1.953-1.429,1.429c.339,.109,.647,.29,.906,.524Z"
                fill="#fff"
              ></path>
              <path
                d="M10.86,9.764l1.429-1.429-1.953,.523c.234,.258,.415,.566,.524,.906Z"
                fill="#fff"
              ></path>
              <circle cx="8.5" cy="10.523" r="2.188" fill="#fff"></circle>
              <path
                d="M12.875,10.523l-1.952-.523c.036,.169,.056,.344,.056,.523s-.02,.354-.056,.523l1.952-.523Z"
                fill="#fff"
              ></path>
              <path
                d="M9.259,12.883l1.429,1.429-.523-1.953c-.258,.234-.566,.415-.906,.524Z"
                fill="#fff"
              ></path>
              <path
                d="M10.336,12.187l1.953,.523-1.429-1.429c-.109,.339-.29,.647-.524,.906Z"
                fill="#fff"
              ></path>
              <path
                d="M8.5,13.002c-.179,0-.354-.02-.523-.056l.523,1.952,.523-1.952c-.169,.036-.344,.056-.523,.056Z"
                fill="#fff"
              ></path>
              <path
                d="M6.836,12.359l-.523,1.953,1.429-1.429c-.339-.109-.647-.29-.906-.524Z"
                fill="#fff"
              ></path>
              <path
                d="M6.14,11.282l-1.429,1.429,1.953-.523c-.234-.258-.415-.566-.524-.906Z"
                fill="#fff"
              ></path>
              <path
                d="M6.021,10.523c0-.179,.02-.354,.056-.523l-1.952,.523,1.952,.523c-.036-.169-.056-.344-.056-.523Z"
                fill="#fff"
              ></path>
            </svg>
            Taiwan
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">TWD</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">NT$1 = ₦1300</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1" >
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#459a45"
              ></rect>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M3.472,16l12.528,8,12.528-8-12.528-8L3.472,16Z"
                fill="#fedf00"
              ></path>
              <circle cx="16" cy="16" r="5" fill="#0a2172"></circle>
              <path
                d="M14,14.5c-.997,0-1.958,.149-2.873,.409-.078,.35-.126,.71-.127,1.083,.944-.315,1.951-.493,2.999-.493,2.524,0,4.816,.996,6.519,2.608,.152-.326,.276-.666,.356-1.026-1.844-1.604-4.245-2.583-6.875-2.583Z"
                fill="#fff"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            Brazil
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">BRL</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">$1R = ₦200</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div> 
    
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#c93927"
              ></rect>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path fill="#fff" d="M14 10H18V22H14z"></path>
              <path
                transform="rotate(90 16 16)"
                fill="#fff"
                d="M14 10H18V22H14z"
              ></path>
            </svg>
            Switzerland
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">CHF</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">CHF1 = ₦1000</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#f1c142" d="M1 10H31V22H1z"></path>
              <path
                d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                fill="#a0251e"
              ></path>
              <path
                d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 16 24.5)"
                fill="#a0251e"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z"
                fill="#9b8028"
              ></path>
              <path
                d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z"
                fill="#9b8028"
              ></path>
              <path
                d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z"
                fill="#9b8028"
              ></path>
              <path
                d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z"
                fill="#a0251e"
              ></path>
            </svg>
            Spain
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div> 

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
          <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#282646" d="M1 11H31V21H1z"></path>
              <path
                d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                fill="#992532"
              ></path>
              <path
                d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 16 24)"
                fill="#992532"
              ></path>
              <path fill="#fff" d="M1 9H31V12H1z"></path>
              <path fill="#fff" d="M1 20H31V23H1z"></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            Thailand
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">THB</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">฿1 = ₦40</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div> 

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
          <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
            <svg  className="w-[40%] sm:w-[9%]"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#b92932"
              ></rect>
              <path
                fill="#fff"
                d="M31 14L15 14 15 4 11 4 11 14 1 14 1 18 11 18 11 28 15 28 15 18 31 18 31 14z"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            Denmark
          </div>
          <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">DKK</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-12  text-[10px] sm:text-[16px]">kr1 = ₦150</span>
                     <Link to={'/sell'}
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
            >
              Sell
            </Link>
          </div>
          </Link>
    </div>
    
<section className={`${isVisible ? '' : 'hidden'}`} id="additionalRows">
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z"
                  fill="#030a85"
                ></path>
                <path
                  d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z"
                  fill="#d04839"
                ></path>
                <path
                  d="M2.271,26.911l12.729-10.911L2.271,5.089c-.778,.73-1.271,1.76-1.271,2.911V24c0,1.151,.493,2.181,1.271,2.911Z"
                ></path>
                <path
                  d="M5.61,4h-.61c-1.058,0-2.014,.419-2.729,1.089l12.729,10.911L2.271,26.911c.715,.671,1.671,1.089,2.729,1.089h.61l10.5-9h14.89v-6h-14.89L5.61,4Z"
                  fill="#fff"
                ></path>
                <path
                  d="M2.271,5.089c-.768,.72-1.254,1.733-1.267,2.866l9.386,8.045L1.005,24.045c.013,1.133,.499,2.146,1.267,2.866l12.729-10.911L2.271,5.089Z"
                  fill="#f5bd45"
                ></path>
                <path
                  d="M4.175,4.087c-1.419,.298-2.544,1.354-2.974,2.72l10.725,9.193L1.201,25.193c.429,1.366,1.555,2.422,2.974,2.72l11.565-9.913h15.26v-4H15.74L4.175,4.087Z"
                  fill="#33764c"
                ></path>
                <path
                  d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              South Africa
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">ZAR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">R1 = ₦70</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
    
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="#cc2b1d" d="M1 11H31V21H1z"></path>
                <path
                  d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                ></path>
                <path
                  d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 16 24)"
                  fill="#f8d147"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Germany
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="#fff" d="M1 11H31V21H1z"></path>
                <path
                  d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                  fill="#a1292a"
                ></path>
                <path
                  d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 16 24)"
                  fill="#264387"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Netherlands
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div> 

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                <path
                  d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                  fill="#a0251e"
                ></path>
                <path
                  d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 16 24.5)"
                  fill="#a0251e"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
                <path
                  d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z"
                  fill="#9b8028"
                ></path>
                <path
                  d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z"
                  fill="#9b8028"
                ></path>
                <path
                  d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z"
                  fill="#9b8028"
                ></path>
                <path
                  d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z"
                  fill="#a0251e"
                ></path>
              </svg>
              Spain
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
        
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="#fff" d="M10 4H22V28H10z"></path>
                <path
                  d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#41914d"
                ></path>
                <path
                  d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 26 16)"
                  fill="#bf393b"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Italy
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M5,4H13V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#2b6519"
                ></path>
                <path
                  d="M16,4h15V28h-15c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 21.5 16)"
                  fill="#ea3323"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
                <circle cx="12" cy="16" r="5" fill="#ff5"></circle>
                <path
                  d="M14.562,13.529l-5.125-.006v3.431h0c.004,.672,.271,1.307,.753,1.787,.491,.489,1.132,.759,1.805,.759,.684,0,1.328-.267,1.813-.75,.485-.484,.753-1.126,.753-1.808v-3.413Z"
                  fill="#ea3323"
                ></path>
              </svg>
              Portugal
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#fff"
                ></rect>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <circle cx="16" cy="16" r="6" fill="#ae232f"></circle>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Japan
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">JPY</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">¥1 = ₦10</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
          
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#071b65"
                ></rect>
                <path
                  d="M6.5,13.774v2.226h4v-2.227l3.037,2.227h2.463v-1.241l-3.762-2.759h3.762v-4h-2.74l2.74-2.009v-1.991h-1.441l-4.059,2.977v-2.977H6.5v2.794l-3.257-2.389c-.767,.374-1.389,.983-1.786,1.738l2.532,1.858H1s0,0,0,0v4h3.763l-3.763,2.76v1.24H3.464l3.036-2.226Z"
                  fill="#fff"
                ></path>
                <path
                  d="M1.806,5.589l3.285,2.411h1.364L2.36,4.995c-.204,.18-.39,.377-.554,.594Z"
                  fill="#b92831"
                ></path>
                <path
                  fill="#b92831"
                  d="M1 16L6.454 12 6.454 13 2.363 16 1 16z"
                ></path>
                <path
                  fill="#b92831"
                  d="M9.5 16L7.5 16 7.5 11 1 11 1 9 7.5 9 7.5 4 9.5 4 9.5 9 16 9 16 11 9.5 11 9.5 16z"
                ></path>
                <path
                  fill="#b92831"
                  d="M16 15.667L11 12 11 13 15.091 16 16 16 16 15.667z"
                ></path>
                <path
                  fill="#b92831"
                  d="M16 4L15.752 4 10.291 8.004 11.655 8.004 16 4.818 16 4z"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
                <path
                  fill="#b92831"
                  d="M23.495 8.062L23.008 9.56 21.433 9.56 22.707 10.486 22.22 11.984 23.495 11.058 24.769 11.984 24.282 10.486 25.556 9.56 23.981 9.56 23.495 8.062z"
                ></path>
                <path
                  d="M25.007,12.311l-1.512-1.098-1.512,1.098,.578-1.777-1.512-1.099h1.869l.578-1.777,.578,1.777h1.869l-1.512,1.099,.578,1.777Zm-1.512-1.407l1.037,.752-.396-1.218,1.036-.753h-1.281l-.396-1.219-.396,1.219h-1.281l1.036,.753-.396,1.218,1.037-.752Z"
                  fill="#fff"
                ></path>
                <path
                  fill="#b92831"
                  d="M23.495 19.076L23.008 20.574 21.433 20.574 22.707 21.5 22.22 22.998 23.495 22.072 24.769 22.998 24.282 21.5 25.556 20.574 23.981 20.574 23.495 19.076z"
                ></path>
                <path
                  d="M25.007,23.325l-1.512-1.099-1.512,1.099,.578-1.777-1.512-1.099h1.869l.578-1.777,.578,1.777h1.869l-1.512,1.099,.578,1.777Zm-1.512-1.407l1.037,.753-.396-1.219,1.036-.753h-1.281l-.396-1.219-.396,1.219h-1.281l1.036,.753-.396,1.219,1.037-.753Z"
                  fill="#fff"
                ></path>
                <path
                  fill="#b92831"
                  d="M27.503 12.774L27.111 13.983 25.84 13.983 26.868 14.73 26.475 15.938 27.503 15.191 28.531 15.938 28.139 14.73 29.167 13.983 27.896 13.983 27.503 12.774z"
                ></path>
                <path
                  d="M28.769,16.265l-1.266-.92-1.266,.92,.483-1.488-1.266-.919h1.564l.483-1.488,.483,1.488h1.564l-1.266,.919,.483,1.488Zm-1.266-1.229l.79,.574-.302-.929,.79-.574h-.977l-.302-.929-.302,.929h-.977l.79,.574-.302,.929,.79-.574Z"
                  fill="#fff"
                ></path>
                <path
                  fill="#b92831"
                  d="M19.77 13.417L19.377 14.625 18.106 14.625 19.134 15.372 18.742 16.58 19.77 15.833 20.798 16.58 20.405 15.372 21.433 14.625 20.162 14.625 19.77 13.417z"
                ></path>
                <path
                  d="M21.035,16.907l-1.266-.919-1.266,.919,.483-1.487-1.266-.92h1.564l.483-1.488,.483,1.488h1.565l-1.266,.92,.483,1.487Zm-1.266-1.228l.79,.574-.302-.929,.791-.574h-.977l-.302-.929-.302,.929h-.977l.79,.574-.302,.929,.79-.574Z"
                  fill="#fff"
                ></path>
              </svg>
              New Zealand
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">NZD</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">NZD1 = ₦500</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#2e69a4"
                ></rect>
                <path
                  fill="#f7cf46"
                  d="M31 14L15 14 15 4 11 4 11 14 1 14 1 18 11 18 11 28 15 28 15 18 31 18 31 14z"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Sweden
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">SEK</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">kr1 = ₦70</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
          
    <div   className="space-y-2 sm:px-8 lg:px-10">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#ac2431"
                ></rect>
                <path
                  fill="#fff"
                  d="M31 12L17 12 17 4 9 4 9 12 1 12 1 20 9 20 9 28 17 28 17 20 31 20 31 12z"
                ></path>
                <path
                  fill="#061a57"
                  d="M31 14L15 14 15 4 11 4 11 14 1 14 1 18 11 18 11 28 15 28 15 18 31 18 31 14z"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Norway
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">NOK</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">¥1 = ₦100</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path fill="#fff" d="M10 4H22V28H10z"></path>
                <path
                  d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#41914d"
                ></path>
                <path
                  d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  transform="rotate(180 26 16)"
                  fill="#bf393b"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Italy
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
        
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V15H1v9Z"
                  fill="#cb2e40"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z"
                  fill="#fff"
                ></path>
                <path
                  d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Poland
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">PLN</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">zł1 = ₦300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#fff"
                ></rect>
                <path
                  d="M1.244,6.67H30.756c-.55-1.552-2.016-2.67-3.756-2.67H5c-1.74,0-3.206,1.118-3.756,2.67Z"
                  fill="#295cab"
                ></path>
                <path fill="#295cab" d="M1 9.34H31V12.01H1z"></path>
                <path fill="#295cab" d="M1 14.68H31V17.35H1z"></path>
                <path
                  fill="#295cab"
                  d="M1 20.02H31V22.689999999999998H1z"
                ></path>
                <path
                  d="M1.253,25.36c.558,1.536,2.018,2.64,3.747,2.64H27c1.729,0,3.188-1.104,3.747-2.64H1.253Z"
                  fill="#295cab"
                ></path>
                <path
                  d="M14.35,4H5c-2.209,0-4,1.791-4,4v9.35H14.35V4Z"
                  fill="#295cab"
                ></path>
                <path fill="#fff" d="M1 9.34H14.35V12.01H1z"></path>
                <path
                  transform="rotate(90 7.675 10.675)"
                  fill="#fff"
                  d="M1 9.34H14.35V12.01H1z"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              Greece
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">EUR</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">€1 = ₦1300</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
          
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#db362f"
                ></rect>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  fill="#ff0"
                  d="M7.958 10.152L7.19 7.786 6.421 10.152 3.934 10.152 5.946 11.614 5.177 13.979 7.19 12.517 9.202 13.979 8.433 11.614 10.446 10.152 7.958 10.152z"
                ></path>
                <path
                  fill="#ff0"
                  d="M12.725 8.187L13.152 8.898 13.224 8.072 14.032 7.886 13.269 7.562 13.342 6.736 12.798 7.361 12.035 7.037 12.461 7.748 11.917 8.373 12.725 8.187z"
                ></path>
                <path
                  fill="#ff0"
                  d="M14.865 10.372L14.982 11.193 15.37 10.46 16.187 10.602 15.61 10.007 15.997 9.274 15.253 9.639 14.675 9.044 14.793 9.865 14.048 10.23 14.865 10.372z"
                ></path>
                <path
                  fill="#ff0"
                  d="M15.597 13.612L16.25 13.101 15.421 13.13 15.137 12.352 14.909 13.149 14.081 13.179 14.769 13.642 14.541 14.439 15.194 13.928 15.881 14.391 15.597 13.612z"
                ></path>
                <path
                  fill="#ff0"
                  d="M13.26 15.535L13.298 14.707 12.78 15.354 12.005 15.062 12.46 15.754 11.942 16.402 12.742 16.182 13.198 16.875 13.236 16.047 14.036 15.827 13.26 15.535z"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              China
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">CNY</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">¥1 = ₦100</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>
          
      <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
              <svg  className="w-[40%] sm:w-[9%]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  fill="#ea3323"
                ></path>
                <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
                <path fill="#fff" d="M10 11H31V21H10z"></path>
                <path
                  d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z"
                  fill="#317234"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
              United Arab Emirates
            </div>
            <div  className="w-1/3 sm:pl-12 pl-14 text-[10px] sm:text-[16px]">AED</div>
            <div  className="w-1/3 flex justify-between items-center">
              <span  className="pl-12  text-[10px] sm:text-[16px]">AED1 = ₦200</span>
                       <Link to={'/sell'}
                 className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
                Sell
              </Link>
            </div>
          </Link>
    </div>

</section>
</section>


      <div  className="text-center mt-6 mb-5">
        <button 
          id="showMoreButton" onClick={handleToggle}
           className="bg-[#161D6F] text-white sm:px-6 px-3 py-2 rounded-lg hover:bg-[#1522ad] text-[10px] sm:text-[16px]"
        >
           {isVisible ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}

export default Countryrates