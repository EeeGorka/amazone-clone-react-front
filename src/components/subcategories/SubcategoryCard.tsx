import classes from './subcategoryCard.module.css'
import React from "react";
import ISubcategory from "../../interfaces/ISubcategory";
import { subcategoryImageAPI } from "../../redux/api/subcategoryImageAPI";

const SubcategoryCard: React.FunctionComponent<{ subcategory: ISubcategory }> = ({ subcategory }) => {

    const { data: subcategoryImage } = subcategoryImageAPI.useFetchByIdQuery(subcategory.subcategoryImageId!);


    return (
        <div className={classes.subcategoryCard}>
            <div className={classes.subcategoryCardLink}>
                <img className={classes.subcategoryCardImage}
                    src={'data:image/jpg;base64,' + (subcategoryImage ? subcategoryImage.data : '')}
                    alt="Category" />
            </div>
            <a href='' className={classes.subcategoryCardText}>{subcategory.name}</a>
        </div>
    );
}

export default SubcategoryCard;