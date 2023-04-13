import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const product = await data.json();

  return {
    props: {
      product,
    },
  };
}

const SingleProduct = ({ product }) => {
  return (
    <div key={product.id} className={styles.productContainer}>
      <div className={styles.product}>
        <h3 className={styles.title}>{product.title}</h3>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
        <button className={styles.productBtn}>Add to Cart</button>
        <form className={styles.form}>
          <h3 className={styles.feedbackTitle}>Add your feedback</h3>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.inputEmail}
            type="email"
            id="email"
            required
          />
          <label className={styles.label} for="comment">
            Comment:
          </label>
          <textarea
            className={styles.textarea}
            id="comment"
            name="comment"
            required
          ></textarea>
          <input className={styles.inputBtn} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
