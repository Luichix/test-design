import Image from 'next/image';
import styles from './Product.module.css';
import Rating from './Rating';
import Stock from './Stock';
import Circle from './svg/Circle';
import Star from './svg/Star';

interface ProductProps {
  name: string;
  imageURL: string;
  rating: number;
  stock: number;
  price: number;
  alt: string;
  special: number;
  description: string;
}

const Product = ({
  name,
  imageURL,
  rating,
  stock,
  price,
  special,
  description,
  alt,
}: ProductProps) => {
  const stars = Array(Math.round(rating)).fill(true);

  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <Image
          src={imageURL}
          alt={alt}
          width={134}
          height={134}
          sizes="(max-width: 768px) 80px, (max-width: 1200px) 134px, 134px"
          style={{
            zIndex: '-10',
            position: 'relative',
          }}
        />
      </figure>
      <div className={styles.details}>
        <div className={styles.product}>
          <h2>{name}</h2>
          <div className={styles.prices}>
            <span>${price}</span>
            <span>${special}</span>
          </div>
        </div>
        <Rating rating={rating} stars={stars} />
        <Stock stock={stock} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Product;
