import ProductSlider from "../productSlider/ProductSlider";
import productColor1 from '../../../imgs/product/imageColor1.jpg'
import productColor2 from '../../../imgs/product/imageColor2.jpg'
import productColor3 from '../../../imgs/product/imageColor3.jpg'
import productColor4 from '../../../imgs/product/imageColor4.jpg'
import styles from "./ProductBlock.module.css";

const ProductBlock = () => {
   const productsColor = [
      {
         active: false,
         imageUrl: productColor1,
      },
      {
         active: false,
         imageUrl: productColor2,
      },
      {
         active: true,
         imageUrl: productColor3,
      },
      {
         active: false,
         imageUrl: productColor4,
      },
   ]

   const rating = 4.5;
   return (
      <>
         <div className={styles.productBlock}>
            <div className={`${styles.productBlock__container} productBlock__container`}>
               <div className={styles.productBlock__body}>
                  <div className={styles.productBlock__productImage}>
                     <ProductSlider />
                  </div>
                  <div className={styles.productBlock__info}>
                     <div className={styles.productBlock__top}>
                        <a href="" className={styles.productBlock__link}>Відвідайте магазин Manfinity LEGND</a>
                        <h2 className={styles.productBlock__title}>Чоловіча футболка Manfinity Hypemode із заниженими плечима з літерами</h2>
                        <div className={styles.productBlock__ratingBlock}>
                           <div className={styles.productBlock__rating}>
                              <div className={styles.productBlock__ratingValue}>{rating}</div>
                              <div className={styles.productBlock__ratingStars}>
                                 <div className={styles.productBlock__ratingStarsActive} style={{ width: `calc(20% * ${rating})` }}></div>
                              </div>
                           </div>
                           <div className={styles.productBlock__ratingCount}>Оцінок: <span>61 237</span></div>
                        </div>
                     </div>
                     <div className={styles.productBlock__priseBlock}>
                        Ціна:<span>289грн</span>
                     </div>
                     <div className={styles.productBlock__sizeBlock}>
                        Розмір:
                        <ul>
                           <li><a href="">S</a></li>
                           <li><a href="">M</a></li>
                           <li><a href="">L</a></li>
                           <li><a href="">XL</a></li>
                           <li><a href="">XXL</a></li>
                        </ul>
                     </div>
                     <div className={styles.productBlock__color}>
                        <div className={styles.productBlock__colorTitle}>
                           Колір: <span>Хакі</span>
                        </div>
                        <ul>
                           {productsColor.map(productColor => <li><a className={productColor.active ? `${styles._active}` : `${''}`} href=""><img src={productColor.imageUrl} alt="product color image" /></a></li>)}
                        </ul>
                     </div>
                     <div className={styles.productDetails}>
                        <div className={styles.productDetails__title}>Деталі продукту</div>
                        <div className={styles.productDetails__items}>
                           <div className={styles.productDetails__item}>
                              <div className={styles.productDetails__label}>Тип тканини</div>
                              <div className={styles.productDetails__text}>95% поліестер, 5% інші волокна</div>
                           </div>
                           <div className={styles.productDetails__item}>
                              <div className={styles.productDetails__label}>Інструкція по догляду</div>
                              <div className={styles.productDetails__text}>Машинне прання</div>
                           </div>
                           <div className={styles.productDetails__item}>
                              <div className={styles.productDetails__label}>Походження</div>
                              <div className={styles.productDetails__text}>Імпортні</div>
                           </div>
                        </div>
                     </div>
                     <div className={styles.productBlock__bottom}>
                        <div className={styles.aboutProduct}>
                           <div className={styles.aboutProduct__title}>Про цей предмет</div>
                           <ul>
                              <li>Чоловіча футболка, повсякденна літня, великих розмірів, з заниженими плечима.</li>
                              <li>Футболка для повсякденного життя, вдома, на природі, на вулиці, будь-якому іншому випадку в літні дні.</li>
                              <li>Розмір: S-5XL, різні кольори для різноманітного вибору.</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProductBlock;