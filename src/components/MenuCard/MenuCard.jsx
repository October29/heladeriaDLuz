import style from "./MenuCard.module.css"

const MenuCard = ({foto, nombre, descripcion, precio}) => {
  
  return(
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={foto} alt={nombre} />
      </div>
      <div className={style.infoContainer}>
        <h3 className={style.productName}>{nombre}</h3>
      <p className={style.price}>{`$ ${precio}`}</p>
        <div className={style.productIngredients}>
          <h4>Ingredientes</h4>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  )
};

export default MenuCard;