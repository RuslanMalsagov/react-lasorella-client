import React from 'react';
import styles from './category-section.module.scss';
import cn from 'classnames';
import { ProductCard } from '../product-card';
import { Container } from '../container';

export const CategorySection = () => {
  return (
    <div className={styles.categorySection}>
      <Container>
        <div className={styles.categorySection__title}>Холодные закуски</div>
      </Container>
      <div className={styles.categorySection__cards}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
