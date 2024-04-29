import styles from "./ProductsPageBodyCard.module.css";
import IProduct from "../../interfaces/IProduct";

const ProductsPageBodyCard: React.FunctionComponent<{ name: string, description: string, price: number, productTypeId: number, productColorsIds: number[], discount?: number }> = ({ name, description, price, productTypeId, productColorsIds, discount }) => {
   return (
      <div className={styles.bodyMain__item}>
         <div className={styles.bodyMain__image}>
            <a href="">
               <picture>
                  <source srcSet="img/main/image1.webp" type="image/webp" />
                  <img src="img/main/image1.jpg" alt="image1" />
               </picture>
            </a>
         </div>
         <a href="" className={styles.bodyMain__title}>
            {name}
         </a>
         <div className={`${styles.bodyMain__price} ${discount && styles.discount}`}>{price} грн{discount && <span>{`-${discount}%`}</span>}</div>
      </div>
   );
}

export default ProductsPageBodyCard;