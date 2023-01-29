import cn from 'classnames';
import styles from './product-card.module.scss';
import imageCard from '../../assets/card-image.png';
import { Button } from '../button';

interface IProductCard {
  inCart?: boolean;
}

export const ProductCard = ({ inCart, ...props }: IProductCard) => {
  return (
    <div {...props} className={cn(styles.productCard)}>
      <img className={cn(styles.productCard__imageProduct)} src={imageCard} alt='еда' />
      <div className={cn(styles.productCard__cardInfo)}>
        <div className={cn(styles.productCard__cardInfo__nameProduct)}>
          <div>Ягненок</div>
          <span>Вес: 225 г</span>
        </div>
        <div className={cn(styles.productCard__cardInfo__descriptionProduct)}>
          Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком
        </div>
        {inCart ? (
          <div className={cn(styles.productCard__cardInfo__priceButtonProduct)}>
            <Button>-</Button>
            <div>620 ₽</div>
            <Button>+</Button>
          </div>
        ) : (
          <div className={cn(styles.productCard__cardInfo__priceButtonProduct)}>
            <div>620 ₽</div>
            <Button>В корзину</Button>
          </div>
        )}
      </div>
    </div>
  );
};
