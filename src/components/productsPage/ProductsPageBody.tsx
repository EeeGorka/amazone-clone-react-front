import ProductsPageBodyCardList from "./ProductsPageBodyCardList";
import styles from "./ProductsPageBody.module.css";


const ProductsPageBody = () => {
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
         price: 260,
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
         price: 237,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6]
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
      <div className={styles.bodyMain}>
         <ProductsPageBodyCardList products={products} />
      </div>
   );
}

export default ProductsPageBody;