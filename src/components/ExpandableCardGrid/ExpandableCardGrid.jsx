import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './ExpandableCardGrid.module.css';
import MenuCard from '../MenuCard/MenuCard';

const ExpandableCardGrid = ({ productos, initialVisibleCount = 5 }) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const gridRef = useRef(null); // Referencia al contenedor del grid

  // Calcula el número de tarjetas que caben en dos filas
  const calculateVisibleCount = useCallback(() => {
    const container = document.querySelector(`.${styles.grid}`);
    if (!container) return 0;

    const containerWidth = container.offsetWidth;
    const cardWidth = 200; // Ajusta este valor al ancho real de tus tarjetas
    const gap = 16; // Ajusta este valor al espaciado entre tarjetas
    const cardAndGapWidth = cardWidth + gap;
    const cardsPerRow = Math.floor(containerWidth / cardAndGapWidth);
    const rows = 2; // Número de filas deseadas
    return cardsPerRow * rows;
  }, [styles.grid]);

  useEffect(() => {
    // Ajusta el número visible de tarjetas en función de la ventana
    const handleResize = () => {
      if (isExpanded) {
        setVisibleCount(productos.length);
      } else {
        setVisibleCount(calculateVisibleCount());
      }
    };

    handleResize(); // Inicializa con el tamaño de la ventana actual
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded, calculateVisibleCount, productos.length]);

  const toggleExpand = () => {
    if (isExpanded) {
      // Cuando se expande, muestra todas las tarjetas
      setVisibleCount(productos.length);
    } else {
      // Cuando se contrae, muestra dos filas de tarjetas
      setVisibleCount(calculateVisibleCount());

      // Asegúrate de que el DOM esté actualizado antes de desplazar
      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container} ref={gridRef}>
      <div className={styles.grid}>
        {productos.slice(0, visibleCount).map((producto, index) => (
          <div className={styles.cardContent} key={index}>
            <MenuCard {...producto} />
          </div>
        ))}
      </div>
      {productos.length > initialVisibleCount && (
        <div className={styles.buttonContainer}>
          <button onClick={toggleExpand} className={styles.button}>
            {isExpanded ? 'Ver menos' : 'Ver más'}
            <span className={`${styles.chevron} ${isExpanded ? styles.up : styles.down}`}></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandableCardGrid;
