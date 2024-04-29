import React from "react";
import styles from "./ReviewsItem.module.css";



const ReviewsItem: React.FunctionComponent<{ name: string, date: string, review: number, landing: boolean, color: string, size: string, text: any, images: string[] }> = ({ name, date, review, landing, color, size, text, images }) => {
   return (
      <div className={styles.reviewsItem}>
         <div className={styles.reviewsItem__top}>
            <div className={styles.reviewsItem__name}>{name}</div>
            <div className={styles.reviewsItem__date}>{date}</div>
         </div>
         <div className={styles.reviewsItem__review}>
            <div className={styles.reviewsItem__reviewStars}>
               <div className={styles.reviewsItem__reviewStarsActive} style={{ width: `calc(20% * ${review})` }}></div>
            </div>
         </div>
         <div className={styles.reviewsItem__info}>
            <div><span>Загальна посадка:</span> {landing ? `Відповідає розміру` : `Не відповідає розміру`}</div>
            <div><span>Колір:</span> {color}</div>
            <div><span>Розмір:</span> {size}</div>
         </div>
         <div className={styles.reviewsItem__text}>
            {text}
         </div>
         <div className={styles.reviewsItem__imageBlock}>
            {images.map(image => <div className={styles.reviewsItem__image}><img src={image} alt={image} /></div>)}
         </div>
      </div>
   );
}

export default ReviewsItem;