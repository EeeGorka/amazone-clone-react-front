import styles from "./RecommendationsCard.module.css";

const RecommendationsCard: React.FunctionComponent<{ name: string, description: string, price: number, productTypeId: number, productColorsIds: number[], discount?: number }> = ({ name, description, price, productTypeId, productColorsIds, discount }) => {
   return (
      <div className={styles.recommendations__item}>
         <div className={styles.recommendations__image}>
            <a href="">
               <picture>
                  <source srcSet="img/main/image1.webp" type="image/webp" />
                  <img src="img/main/image1.jpg" alt="image1" />
               </picture>
            </a>
         </div>
         <a href="" className={styles.recommendations__cardTitle}>
            {name}
         </a>
         <div className={`${styles.recommendations__price} ${discount && styles.discount}`}>{price} грн{discount && <span>{`-${discount}%`}</span>}</div>
      </div>
   );
}

export default RecommendationsCard;