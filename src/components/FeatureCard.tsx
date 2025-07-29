import React from "react";
import styles from "./FeatureCard.module.css";

interface BrandCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const BrandCard: React.FC<BrandCardProps> = ({ title, description, icon }) => (
  <div className={styles.card}>
    <div className={styles.border}></div>
    <div className={styles.content}>
      {/* Icon, Title and Description */}
      <div style={{  textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {icon && <div style={{ fontSize: 36, color: '#bd9f67', marginBottom: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>}
        <h3 style={{ color: '#bd9f67', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{title}</h3>
        <p style={{ color: '#fff', fontSize: 14 , padding: '0rem 2rem'}}>{description}</p>
      </div>
    </div>
    <span className={styles.bottomText}>ADmyBRAND</span>
  </div>
);

export default BrandCard;