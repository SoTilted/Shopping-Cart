import { useEffect, useState } from "react";
import { H1 } from "../styled-tags";
const useItemFetch = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setItems(json))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { items, error, loading };
};
export default function ShopPage() {
  const { items, error, loading } = useItemFetch();
  return loading ? (
    <>
      <H1>Loading...</H1>
    </>
  ) : !error ? (
    <>
      <H1>Welcome to the Shop!</H1>
      <ul>
        {items.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </>
  ) : (
    <p>A network error was encountered.</p>
  );
}
