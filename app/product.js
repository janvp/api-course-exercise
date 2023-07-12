import styles from './page.module.css'

export default function Product({ product, user, image }) {
    return (
        <div className={styles.product}>
            {image && <img src={"data:image/gif;base64," + image.base64} alt={image.name} />}
            <h3>{product.name}</h3>
            <div>{product.price && '€ ' + product.price}</div>
            <div className={styles.owner}>Published by {user.name}</div>
        </div>
    );
}