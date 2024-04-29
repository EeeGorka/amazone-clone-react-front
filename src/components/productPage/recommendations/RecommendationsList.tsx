import React from "react";
import RecommendationsCard from "./RecommendationsCard";
import styles from "./RecommendationsList.module.css";

const RecommendationsList: React.FunctionComponent<{ products: Array<{ name: string, description: string, price: number, productTypeId: number, productColorsIds: number[], discount?: number }> }> = ({ products }) => {
   return (
      <div className={styles.recommendations__items}>
         {products.map(product => <RecommendationsCard name={product.name} description={product.description} price={product.price} productTypeId={product.productTypeId} productColorsIds={product.productColorsIds} discount={product.discount} />)}
      </div>
   );
}

export default RecommendationsList;