import React, { useState } from 'react';
import cn from 'classnames';
import styles from './category.module.scss';
import { Container } from '../container';

export const Category = () => {
  const categories = [
    'Холодные закуски',
    'Горячие закуски',
    'Мясные блюда',
    'Супы',
    'Рыбные блюда',
    'Гриль меню',
    'Фирменные блюда',
    'Напитки',
  ];

  const [active, setActive] = useState<number>(0);
  const handleActive = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div className={cn(styles.category)}>
      <Container className={cn(styles.category__container)}>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={cn(styles.category__container__item, {
                [styles.category__container__item_active]: active === index,
              })}>
              <a onClick={e => handleActive(e, index)} href='@'>
                {category}
              </a>
            </div>
          );
        })}
      </Container>
    </div>
  );
};
