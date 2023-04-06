import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  const { categoryId, productId } = router.query;
  return (
    <div>
      Single product with id {productId} for category {categoryId}
    </div>
  );
};

export default ProductPage;
