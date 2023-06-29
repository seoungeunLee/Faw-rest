"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
 return (
  <div className="text-[#333] bg-white text-center w-full h-[100vh] ">
   <div className="w-full bg-[mistyrose] relative">
    <div className="absolute top-[45%] left-0 w-fit h-[100px] bg-transparent z-[10000] text-left pl-8">
     <p className="text-[24px]">함께 행복을 누릴 수 있는 곳</p>
     <h2 className="font-black text-[50px] leading-[50px]">Paw,rest</h2>
    </div>
    <Swiper className="w-full bg-slate-200 h-[100vh]">
     <SwiperSlide>
      <img
       src="/images/img1.jpeg"
       alt=""
       className="block w-full h-full object-cover"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src="/images/img2.jpeg"
       alt=""
       className="block w-full h-full object-cover"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src="/images/img3.jpeg"
       alt=""
       className="block w-full h-full object-cover"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src="/images/img4.jpeg"
       alt=""
       className="block w-full h-full object-cover"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src="/images/img5.jpeg"
       alt=""
       className="block w-full h-full object-cover"
      />
     </SwiperSlide>
    </Swiper>
   </div>
   <div className="w-full h-[100vh]">
    <div className="flex justify-between items-center w-[80%] h-full mx-auto">
     <img
      src="/images/img1.jpeg"
      alt=""
      className="block w-[500px] h-[500px] object-cover "
     />
     <div className="w-[53%] text-white text-left ">
      <h3 className="text-[35px] font-black">포레스트</h3>
      <p>
       믿고 맡길 수 있고
       <br />
       반려 동물의 필요한 모든 것을
       <br /> 편리하게 이용할 수 있는 공간입니다.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
