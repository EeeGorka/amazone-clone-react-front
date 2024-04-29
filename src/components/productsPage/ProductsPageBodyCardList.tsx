import React from "react";
import ProductsPageBodyCard from "./ProductsPageBodyCard";
import styles from "./ProductsPageBodyCardList.module.css";
import IProduct from "../../interfaces/IProduct";

const ProductsPageBodyCardList: React.FunctionComponent<{ products: Array<{ name: string, description: string, price: number, productTypeId: number, productColorsIds: number[], discount?: number }> }> = ({ products }) => {
   return (
      <div className={styles.bodyMain__items}>
         {products.map(product => <ProductsPageBodyCard name={product.name} description={product.description} price={product.price} productTypeId={product.productTypeId} productColorsIds={product.productColorsIds} discount={product.discount} />)}
      </div>
   );
}

export default ProductsPageBodyCardList;