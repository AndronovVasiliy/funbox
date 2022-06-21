import { useAppSelector } from '../../hooks/hooks'
import CartProduct from '../CartProduct/CartProduct'
import style from './Main.module.scss'

export const Main = () => {

  const {collection} = useAppSelector(state => state)

  return (
    <div className={style.main}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.main_list}>

      {collection.map(item => <CartProduct key = {item.id} {...item}/>)}
      </div>
    </div>
  )
}
