import HeaderBasketList from "./HeaderBasketList";
import styles from "./HeaderBasket.module.css";
import headerBasketImg from "../../../imgs/header/basket.svg"

const HeaderBasket = () => {

    const headerBasketItems = [
        {
            productName: "QINSEN  Жіночі міні-сукні з ліфом із квадратним вирізом і довгими рукавами",
            productPrice: 1539.38,
            productColor: "Чорний",
            inputId: "1",
            labelId: "1",
        },
        {
            productName: "Жіночі чорні шкіряні спідниці з високою талією, облягаючі міні-спідниці",
            productPrice: 962.86,
            productColor: "Білий",
            inputId: "2",
            labelId: "2",
        },
        {
            productName: "Жіночі чорні шкіряні спідниці з високою талією, облягаючі міні-спідниці",
            productPrice: 962.86,
            productColor: "Чорний",
            inputId: "3",
            labelId: "3",
        }
    ];

    return (
        <div className={styles.header__basketWrapper}>
            <a href="" className={styles.header__basketBlock}>
                <img src={headerBasketImg} alt="basket" />
                <div className={styles.header__value}>3</div>
            </a>
            <div className={styles.basketBody}>
                <div className={styles.basketBody__count}>Ваші товари: <span>{headerBasketItems.length}</span></div>
                <HeaderBasketList products={headerBasketItems} />
                <a href="" className={styles.basketBody__link}>Перейти до корзини</a>
            </div>
        </div>
    );
}

export default HeaderBasket;