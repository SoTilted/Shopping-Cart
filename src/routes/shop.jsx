import { useEffect, useState } from "react";
import { H1, ItemList, MainContent, Category } from "../styled-tags";
import Card from "../components/card";
const useItemFetch = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=5")
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
  const categories = ["Popular", "Men", "Women"];

  const fakeItems = [
    { image: "", title: "item1", price: "free" },
    { image: "", title: "item1", price: "free" },
    { image: "", title: "item1", price: "free" },
    { image: "", title: "item1", price: "free" },
  ];
  return loading ? (
    <>
      <MainContent shop={true}>
        {categories.map((category) => {
          return (
            <Category>
              <H1 primary={false}>{category}</H1>
              <ItemList>
                {fakeItems.map((item) => {
                  return (
                    <Card
                      image={item.image}
                      title={item.title}
                      //     rating={item.rating['rate']}
                      price={item.price}
                      classname={"loader"}
                    />
                  );
                })}
              </ItemList>
            </Category>
          );
        })}
      </MainContent>
    </>
  ) : !error ? (
    <>
      <MainContent shop={true}>
        {categories.map((category) => {
          return (
            <Category>
              <H1 primary={false}>{category}</H1>
              <ItemList>
                {items.map((item) => {
                  return (
                    <Card
                      image={item.image}
                      title={item.title}
                      //     rating={item.rating['rate']}
                      price={item.price}
                    />
                  );
                })}
              </ItemList>
            </Category>
          );
        })}
      </MainContent>
    </>
  ) : (
    <p>A network error was encountered.</p>
  );
}
