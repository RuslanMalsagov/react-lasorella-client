import React from 'react';
import cn from 'classnames';
import styles from './main-page.module.scss';
import { Container } from '../../components/container';
import mainImage from '../../assets/bg-image-main.png';

export const MainPage = () => {
  return (
    <div className={cn(styles.section)}>
        <img className={cn(styles.section__mainImage)} src={mainImage} alt='фоновое изображение' />
      <Container>
      </Container>
    </div>
  );
};
