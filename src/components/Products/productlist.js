import Product from "./Product";
export default function ProList({ prods, deleteTask, updateTask }) {
  return (
    <div className="tasks-list">
      {prods.map((prod) => (
        <Product
          key={prod.id}
          id={prod.id}
          label={prod.label}
          price={prod.price}
        />
      ))}
    </div>
  );
}
