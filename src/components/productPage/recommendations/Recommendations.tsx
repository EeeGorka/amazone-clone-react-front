import RecommendationsList from "./RecommendationsList";
import styles from "./Recommendations.module.css";

const Recommendations = () => {
   const products = [
      {
         name: 'Мужская футболка с круглым...',
         description: 'lorem ipsum',
         price: 289,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Футболка с заниженными пле...',
         description: 'lorem ipsum',
         price: 2620,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         discount: 40
      },
      {
         name: 'высокие кроссовки на толстой...',
         description: 'lorem ipsum',
         price: 700,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 237,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Футболка с заниженными пле...',
         description: 'lorem ipsum',
         price: 1260,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         discount: 30
      },
      {
         name: 'высокие кроссовки на толстой...',
         description: 'lorem ipsum',
         price: 700,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 737,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Футболка с заниженными пле...',
         description: 'lorem ipsum',
         price: 260,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         discount: 80
      },
      {
         name: 'высокие кроссовки на толстой...',
         description: 'lorem ipsum',
         price: 700,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 237,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         discount: 10
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 137,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
      },
      {
         name: 'Мужская джинсовая куртка',
         description: 'lorem ipsum',
         price: 1362,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
      }
   ]
   return (
      <div className={styles.recommendations}>
         <div className={`${styles.recommendations__container} recommendations__container`}>
            <h2 className={styles.recommendations__title}>Клієнти також переглядали</h2>
            <RecommendationsList products={products} />
         </div>
      </div>
   );
}

export default Recommendations;