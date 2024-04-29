import React from "react";
import ReviewsItem from "./ReviewsItem";
import styles from "./ReviewsItems.module.css";



const ReviewsItems: React.FunctionComponent<{ reviewsInfo: Array<{ name: string, date: string, review: number, landing: boolean, color: string, size: string, text: any, images: string[] }> }> = ({ reviewsInfo }) => {
   return (
      <div className="reviews__items">
         {reviewsInfo.map(reviewInfo => <ReviewsItem name={reviewInfo.name} date={reviewInfo.date} review={reviewInfo.review} landing={reviewInfo.landing} color={reviewInfo.color} size={reviewInfo.size} text={reviewInfo.text} images={reviewInfo.images} />)}
      </div>
   );
}

export default ReviewsItems;