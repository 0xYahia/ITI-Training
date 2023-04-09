import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Product = ({ products }) => {
  return (
    <section className={styles.products}>
      {products?.map((product) => (
        <div key={product.id} className={styles.product}>
          <h3 className={styles.title}>{product.title}</h3>
          <Link href={`/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
          </Link>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>
          <button className={styles.productBtn}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default Product;
