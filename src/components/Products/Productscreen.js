import React, { useEffect, useState } from "react";
import { fetchProductById } from "../../services/products.service";
import Product from "./Product";
import ProList from "./productlist";
const ProductScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, isdisabled] = useState(disabled);
  const [listReci, setListReci] = useState([]);
  const [selectedCateg, setSelectedCateg] = useState();
  const [flitredList, setFlitredList] = useState([]);
  const [search, setSearch] = useState("");
  const fetchProduct = async () => {
    const list = await fetchProductById;
    setListReci(list);
  };
  const filterList = () => {
    const liste = setFlitredList(listReci);

    const temp = listReci.filter((r) => r.id.includes(search));
    setFlitredList(temp);
  };

  //   useEffect(() => {
  //     fetchProduct();
  //   }, []);

  return (
    <div className="container">
      <Product
        onAction={filterList}
        onidprod={(s) => {
          setSearch(s);
        }}
      />
    </div>
  );
};
