import { useState } from 'react'
import { ProductType } from '../../store/reducers/assortmentRedusers'
import style from './CartProduct.module.scss'

const CartProduct = (props: ProductType) => {

  const [isSelected, setisSelected] = useState(false)

  return (
    <div className={style.cart_product}>
      <div
        onClick={() => props.availability && setisSelected(!isSelected)}
        className={props.availability ? isSelected ? style.back_img_isSelected : style.back_img : style.back_img_not}>
        <div className={style.description}>
          <p className={style.about_product}>Сказочное заморское явство</p>
          <h2 className={style.name}>Нямушка</h2>
          <p className={style.with}>{`c ${props.withTaste}`}</p>
          <p className={style.num_portion}><span className={style.number_of_servings}>{props.numberOfServings}</span> порций</p>
          <p className={style.additional_information}>
            {props.numberOfGifts > 0 && <span className={style.number_of_servings}>{props.numberOfGifts}</span>}
            {` ${props.gift} в подарок`}
          </p>
          <div className={style.circle}>
            <span className={style.weight}>{props.weight}</span>
            <p>кг</p>
          </div>
        </div>
      </div>
      {props.availability ? isSelected ?
        <p className={style.note}>Чего сидишь? Порадуй котэ, <span className={style.buy}>купи.</span></p>
        :
        <p className={style.under_card}>{props.description}</p> : <p className={style.under_card_not}>{`Печалька, с ${props.withTaste} закончился`}</p>}
        
    </div>
  )
}

export default CartProduct