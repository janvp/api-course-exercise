import Image from 'next/image'
import styles from './page.module.css'
import Product from './product'
let db = require('../db.json')

export default function Home() {
  const findUser = userId => db.users.find(user => user.id == userId);
  const findImage = imageId => db.images.find(image => image.id == imageId);

  return (
    <main className={styles.main}>
      <h2>Webshop</h2>
      <div>{db.products.length} products</div>
      <div className={styles.description}>
        {db.products.map(product => (
          <Product product={product} user={findUser(product.userId)} image={findImage(product.imageId)} />
        ))}
      </div>
    </main>
  )
}
