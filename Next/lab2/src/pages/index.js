import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setProducts(json);
      });
  }, []);
  if (isLoading) return <p>Lodading...</p>;
  return (
    <>
      <section className={styles.products}>
        {products.map((product) => (
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
    </>
  );
}
