import React from "react";
import Details from "@/app/component/Page/Head/Tabs/Detail";

const ProductDetailsContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Product specifications
      </h3>
      <Details />
    </section>
  );
};

export default ProductDetailsContent;