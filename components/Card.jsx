import styles from "./card.module.css";
import Link from "next/link";

export const Card = ({name, description, price, id}) => {
    return (
        <div className={styles.card}>
            <h2>{name ?? "Название товара"}</h2>

            <p>{description ?? "Описание товара"}</p>

            <p>
                <span>{price ?? "0"}</span>$
            </p>

            <Link href={`/${id}`}>Подробнее</Link>
        </div>
    );
}   