// "use client";

// import CartCounter from "@/app/component/ui/Counter";
// import React, { useState } from "react";
// import AddToCartBtn from "@/app/component/Page/Head/addbutton";
// import { Product } from "@/app/data.types/producttypes";

// const AddToCardSection = ({ data }: { data: Product }) => {
//   const [quantity, setQuantity] = useState<number>(1);

//   return (
//     <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
//       <CartCounter onadd={setQuantity} onRemove={setQuantity} />
//       <AddToCartBtn data={{ ...data,quantity }} />
//     </div>
//   );
// };

// export default AddToCardSection;

"use client";

import CartCounter from "@/app/component/ui/Counter";
import React, { useState } from "react";
import AddToCartBtn from "@/app/component/Page/Head/Addcard";
import { Product } from "@/app/data.types/producttypes";

const AddToCardSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>();

  return (
    <div className="fixed md:relative w-full bg-white border-t md:border-none border-black/5 bottom-0 left-0 p-4 md:p-0 z-10 flex items-center justify-between sm:justify-start md:justify-center">
      
    </div>
  );
};

export default AddToCardSection;
