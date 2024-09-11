import MENU_HELADERIA from "../../data/menuHeladeria.json"
import MenuCard from "../MenuCard/MenuCard"
import style from "./MenuSecciones.module.css"

const MenuSecciones = () => {
const helados = "Helados";
const malteadas = "Malteadas"

  return(
    <div className={style.menuSecciones}>
      <h4 className={style.tittleSection}>{helados}</h4>
      <div className={style.productContainer}>
        {MENU_HELADERIA.map((product, index) => ( helados === product.categoria ? 
            <MenuCard 
              key={index}
              nombre={product.nombre}
              ingredientes={product.ingredientes}
              precio={product.precio}
              imagen={product.imagen}
            /> : <></>
        ))
        }
      </div>
      <h4 className={style.tittleSection}>{malteadas}</h4>
      <div className={style.productContainer}>
        {MENU_HELADERIA.map((product, index) => ( malteadas === product.categoria ? 
            <MenuCard 
              key={index}
              nombre={product.nombre}
              ingredientes={product.ingredientes}
              precio={product.precio}
              imagen={product.imagen}
            /> : <></>
        ))
        }
      </div>
    </div>
  )
}

export default MenuSecciones;
/*
<MenuCard
        nombre={product.nombre}
        ingredientes={product.ingredientes}
        precio={product.precio}
        imagen={product.imagen}

        /> */