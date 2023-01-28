import { Button } from '../button';
import { ButtonSize } from '../button/button.types';
import { Container } from '../container';
import { Input } from '../input';
import styles from './header.module.scss';
import { ReactComponent as PhoneIcon } from './img/phone_icon.svg';
import { ReactComponent as SearchIcon } from './img/search_icon.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header__logo}>
          <span>LASORELLA</span>
        </div>
        <Input containerProps={{ className: styles.header__input }} placeholder='Введите название блюда' RightContent={<SearchIcon />} />
        <div className={styles.header__contacts}>
          <div className={styles.header__contacts__icon}>
            <PhoneIcon />
          </div>
          <div className={styles.header__contacts__phoneNumber}>
            <span className={styles.header__contacts__phoneNumber__text}>Контакты:</span>
            <span className={styles.header__contacts__phoneNumber__number}>+7 (926) 999-22-68</span>
          </div>
        </div>
        <Button className={styles.header__buttonCart} size={ButtonSize.Small}>
          Корзина
          <span className={styles.header__buttonCart__product}>4</span>
        </Button>
      </Container>
    </div>
  );
};
