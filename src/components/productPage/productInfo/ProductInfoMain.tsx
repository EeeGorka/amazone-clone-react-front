import styles from "./ProductInfoMain.module.css";

const ProductInfoMain = () => {
   return (
      <div className={styles.productInfoMain}>
         <div className={styles.productInfoMain__price}>
            <h2>Ціна:</h2><span>289 грн</span>
         </div>
         <div className={styles.productInfoMain__sizes}>
            <h2>Розмір:</h2>
            <ul>
               <li><a href="">S</a></li>
               <li><a href="">M</a></li>
               <li><a href="">L</a></li>
               <li><a href="">XL</a></li>
               <li><a href="">XXL</a></li>
            </ul>
         </div>
         <div className={styles.productInfoMain__color}>
            <div className={styles.productInfoMain__colorWrapper}><h2>Колір:</h2> <span>Хакі</span></div>
            <ul>
               <li><a href=""><img src="" alt="image color1" /></a></li>
               <li><a href=""><img src="" alt="image color2" /></a></li>
               <li><a href=""><img src="" alt="image color3" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
            </ul>
         </div>
         <div className={styles.productInfoMain__details}>
            <h2 className={styles.productInfoMain__detailsTitle}>Деталі продукту</h2>
            <div className={styles.productInfoMain__detailsItems}>
               <div className={styles.productInfoMain__detailsItem}>
                  <div className={styles.productInfoMain__detailsLabel}>Тип тканини</div>
                  <div className={styles.productInfoMain__detailsText}>95% поліестер, 5% інші волокна</div>
               </div>
               <div className={styles.productInfoMain__detailsItem}>
                  <div className={styles.productInfoMain__detailsLabel}>Інструкція по догляду</div>
                  <div className={styles.productInfoMain__detailsText}>Машинне прання</div>
               </div>
               <div className={styles.productInfoMain__detailsItem}>
                  <div className={styles.productInfoMain__detailsLabel}>Походження</div>
                  <div className={styles.productInfoMain__detailsText}>Імпортні</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductInfoMain;