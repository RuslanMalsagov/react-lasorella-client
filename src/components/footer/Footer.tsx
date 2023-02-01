import React from 'react';
import { Container } from '../container';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div></div>
      </div>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__leftContent}>
            <div className={styles.footer__content__leftContent__logo}>LASORELLA</div>
            <span>
              © ООО СК «АПШЕРОН» <br /> Все права защищены. 2010-2020
            </span>
            <ul className={styles.footer__content__leftContent__links}>
              <li>
                <a href='@'>Пользовательское соглашение</a>
              </li>
              <li>
                <a href='@'>Карта сайта</a>
              </li>
              <li>
                <a href='@'>Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__rightContent}>
            <a href='@'>О ресторане</a>
            <a href='@'>Условия доставки</a>
            <a href='@'>Возврат товара</a>
            <a href='@'>Акции</a>
          </div>
        </div>
      </Container>
    </div>
  );
};
