import React from 'react';
import { Button } from '../../../../components/button';
import { ButtonVariant } from '../../../../components/button/button.types';
import { Container } from '../../../../components/container';
import styles from './our-cafe-section.module.scss';
import { ReactComponent as Image1 } from '../../../../assets/products-image.svg';
import { ReactComponent as Image2 } from '../../../../assets/delivery-image.svg';
import { ReactComponent as Image3 } from '../../../../assets/cook-image.svg';
import { ReactComponent as Image4 } from '../../../../assets/service.svg';

export const OurCafeSection = () => {
  return (
    <div className={styles.OurCafeSection}>
      <Container>
        <div className={styles.OurCafeSection__content}>
          <div className={styles.OurCafeSection__content__left}>
            <h2>НАШ РЕСТОРАН</h2>
            <p>
              Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от
              шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого
              закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая
              видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
            </p>
            <Button variant={ButtonVariant.Outline}>Посмотреть меню</Button>
          </div>
          <div className={styles.OurCafeSection__content__right}>
            <div className={styles.OurCafeSection__content__right__image}>
              <Image1 />
              <span>Свежайщие продукты</span>
            </div>
            <div className={styles.OurCafeSection__content__right__image}>
              <Image2 />
              <span>Быстрая доставка</span>
            </div>
            <div className={styles.OurCafeSection__content__right__image}>
              <Image3 />
              <span>Лучшие повара</span>
            </div>
            <div className={styles.OurCafeSection__content__right__image}>
              <Image4 />
              <span>Лучшее обслуживание</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
