import styles from "./Reviews.module.css";
import ReviewsItems from "./ReviewsItems";


const Reviews = () => {
   const reviewsInfo = [
      {
         name: 'a***7',
         date: '7 Jun,2023',
         review: 5, // of 5
         landing: true,
         color: 'сірий',
         size: 'S',
         text: 'Товар якісний і зручний',
         images: ['img/url1', 'img/url2'],
         // todo color, size, images
      },
      {
         name: 'u***2',
         date: '7 Jun,2023',
         review: 3, // of 5
         landing: false,
         color: 'сірий',
         size: 'XS',
         text: `Якість продукту: для мене погано. Відповідність зображенням продукту: так. Опис запаху: поганий матеріал, не такий, як я очікував, тонкий і дешевий`,
         images: ['img/url3'],
      },
   ]
   return (
      <div className={styles.reviews}>
         <div className={`${styles.reviews__container} reviews__container`}>
            <h2 className={styles.reviews__title}>Відгуки</h2>
            <ReviewsItems reviewsInfo={reviewsInfo} />
         </div>
      </div>
   );
}

export default Reviews;