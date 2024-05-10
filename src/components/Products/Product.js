import React, { useState } from "react";
export default function Product(props) {
  const [identid, setIdentId] = useState();
  const [isdisabled, setIsDisabled] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const handleValideClick = async () => {
    setIsDisabled(!isdisabled);
  };

  const { search, onAction } = props;
  const onidprod = (e) => {
    setIdentId(e.target.value);
  };
  return (
    <div>
      <div>
        <label>Saisir l'identifiant du produit</label>
        <input type="text" value={search} onChange={onidprod} />
      </div>
      <div>
        <button onClick={handleValideClick}>Valider</button>{" "}
      </div>
      <div>
        <label>Saisir la quantité</label>
        <input
          type="text"
          value={quantity}
          disabled={isdisabled}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={onAction}>Ajouter au panier</button>{" "}
      </div>
    </div>
  );
}
