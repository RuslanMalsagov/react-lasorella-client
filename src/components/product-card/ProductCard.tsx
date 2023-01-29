import cn from 'classnames';
import styles from './product-card.module.scss';
import imageCard from '../../assets/card-image.png';
import { Button } from '../button';

export const ProductCard = () => {
  return (
    <div className={cn(styles.productCard)}>
      <img className={cn(styles.productCard__imageProduct)} src={imageCard} alt='еда' />
      <div className={cn(styles.productCard__nameProduct)}>
        <div>Ягненок</div>
        <span>Вес: 225 г</span>
      </div>
      <div className={cn(styles.productCard__descriptionProduct)}>Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком</div>
      <div className={cn(styles.productCard__priceButtonProduct)}>
        <div>620 ₽</div>
        <Button>В корзину</Button>
      </div>
    </div>
  );
};
