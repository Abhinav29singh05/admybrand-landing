import React from "react";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  button: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, button }) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.description}>{description}</div>
    </div>
    <button className={styles.button}>{button}</button>
  </div>
);

export default PricingCard; 