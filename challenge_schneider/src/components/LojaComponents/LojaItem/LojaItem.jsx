import React from "react";
import styles from "./LojaItems.module.css";
import ImagemLoja001 from "../../../assets/img/loja001.jpg";
import CopoBioDegradavel from "../../../assets/img/COPO_BIODEGRADAVEL.png";
import ECOBAG from "../../../assets/img/ECO_BAG.png";
import Escova from "../../../assets/img/ESCOVA.png";
import Caneta from "../../../assets/img/CANETA.png";
import Necessaire from "../../../assets/img/NECESSAIRE.png";
import ProdSchneider from "../../../assets/img/LOJA_SCHNEIDER.png";
import Brecho from "../../../assets/img/BrechoLegal.webp";
import BIKE from "../../../assets/img/BIKE.png";
import Frutaria from "../../../assets/img/HortaLegal.jpeg";

import {ReactComponent as MoneyIcon} from "../../../assets/icons/money.svg"
export default function LojaItem() {
  const itemsData = [
    {
      id: 1,
      name: "Roupas BioDegradáveis - 50% de desconto",
      price: 7000,
      image: ImagemLoja001,
    },
    {
      id: 2,
      name: "Copo BioDegradável",
      price: 500,
      image: CopoBioDegradavel,
    },
    {
      id: 3,
      name: "Eco Bag",
      price: 1000,
      image: ECOBAG,
    },
    {
      id: 4,
      name: "Escova Dental Ecológica",
      price: 200,
      image: Escova,
    },
    {
      id: 5,
      name: "Caneta Ecológica",
      price: 200,
      image: Caneta,
    },
    {
      id: 6,
      name: "Necessaire BioDegradável",
      price: 500,
      image: Necessaire,
    },
    {
      id: 7,
      name: "PRODUTOS SCHNEIDER - 30% de Desconto",
      price: 6000,
      image: ProdSchneider,
    },
    {
      id: 8,
      name: "Loja Bike Legal - 10% de Desconto",
      price: 3000,
      image: BIKE,
    },
    {
      id: 9,
      name: "Brechó Legal - 15% de Desconto",
      price: 4000,
      image: Brecho,
    },
    {
      id: 10,
      name: "Frutaria Hortinha Legal - 40% de Desconto",
      price: 7000,
      image: Frutaria,
    },
    // Adicione mais itens conforme necessário
  ];

  return (
    <div className={styles.containerLoja}>
      <h2 className={styles.titleLoja}>
        Loja <span>Schneider Connect</span>
      </h2>
      <p>Você tem <span>2450</span> Pontos!</p>
      <div className={styles.itemsContainer}>
        {itemsData.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.itemImage}
            />

            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemPrice}><MoneyIcon/>{item.price.toFixed(2)}</p>
            <button className={styles.itemButton}>Comprar com Pontos</button>
          </div>
        ))}
      </div>
    </div>
  );
}
