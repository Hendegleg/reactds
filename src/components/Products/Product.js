import React, { useState } from "react";
export default function Product(props) {
  const [identid, setIdentId] = useState();
  const [disabled, setquantit] = useState(1);
  const { search, onAction } = props;
  const onidprod = (e) => {
    setIdentId(e.target.value);
  };
  return (
    <div>
      <div>
        <label>Saisir l'identifiant du produit</label>
        <input type="text" value={search} onChange={onidprod}></input>{" "}
      </div>
      <div>
        <button onClick={onAction}>Valider</button>{" "}
      </div>
      <div>
        <label>Saisir la quantité</label>
        <input type="text" value={search} onChange={setquantit}></input>{" "}
      </div>
      <div>
        <button onClick={onAction}>Ajouter au panier</button>{" "}
      </div>
    </div>
  );
}
