// import Image from "next/image";
// import React from "react";

// const brandsData: { id: string; srcUrl: string }[] = [
//   {
//     id: "versace",
//     srcUrl: "/icons/versace-logo.svg",
//   },
//   {
//     id: "zara",
//     srcUrl: "/icons/zara-logo.svg",
//   },
//   {
//     id: "gucci",
//     srcUrl: "/icons/gucci-logo.svg",
//   },
//   {
//     id: "prada",
//     srcUrl: "/icons/prada-logo.svg",
//   },
//   {
//     id: "calvin-klein",
//     srcUrl: "/icons/calvin-klein-logo.svg",
//   },
// ];

// const Brands = () => {
//   return (
//     <div className="bg-black">
//       <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
//         {brandsData.map((brand) => (
//           <Image
//             key={brand.id}
//             priority
//             src={brand.srcUrl}
//             height={0}
//             width={0}
//             alt={brand.id}
//             className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brands;

import Image from 'next/image'

export function Brands() {
  return (
    <div className="w-full bg-black py-6 lg:py-8">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
          <Image 
            src="/brands/versace.svg" 
            alt="Versace" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert"
          />
          <Image 
            src="/brands/zara.svg" 
            alt="Zara" 
            width={100} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert"
          />
          <Image 
            src="/brands/gucc.svg" 
            alt="Gucci" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert col-span-3 lg:col-span-1"
          />
          <Image 
            src="/brands/prada.svg" 
            alt="Prada" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert lg:col-span-1"
          />
          <Image 
            src="/brands/calvin.svg" 
            alt="Calvin Klein" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}