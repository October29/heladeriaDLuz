import MENU_HELADERIA from "../../data/menuHeladeria.data"
import MenuCard from "../MenuCard/MenuCard"
import ExpandableCardGrid from "../ExpandableCardGrid/ExpandableCardGrid"
import style from "./MenuSecciones.module.css"

const MenuSecciones = () => {
const helados = "Helados";
const malteadas = "Malteadas"

  return(
    <div className={style.menuSecciones}>
      {MENU_HELADERIA.map((category, index) => (
        <div key={index} style={{margin: "0"}}>
          <h3 className={style.tittleSection}>{category.nombre}</h3>
          <ExpandableCardGrid productos={category.productos} initialVisibleCount={4} />
        </div>
      ))}
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