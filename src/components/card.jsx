import { useEffect, useState } from "react";
import { CardDiv } from "../styled-tags";
import { Form } from "react-router-dom";
import localforage from "localforage";
export default function Card({ image, title, rating, price }) {
  const [input, setInput] = useState("");
  return (
    <>
      <CardDiv>
        <img src={image} alt="fake jewellery" />
        <div>
          <h2>{title}</h2>
          <p>{rating}</p>
          <p>{price}$</p>
        </div>
        <Form method="post">
          <input
            name="data"
            type="number"
            value={input}
            onInput={(e) => {
              if (e.target.value.length <= 3) {
                setInput(e.target.value);
              }
            }}
            min={1}
            max={999}
          />
          <button
            type="submit"
            onClick={() => {
              set(input);
            }}
          >
            Add to cart!
          </button>
        </Form>
      </CardDiv>
    </>
  );
}
export async function loader({ params }) {
  const data = await localforage.getItem("data");
  console.log(data)
  return data ?? null;
}
export async function action({ params, request }) {
  const dataValue = await request.formData();
  return { dataValue };
}
async function set(data) {
  const currentData = await localforage.getItem("data");
  let newData;
  currentData
    ? (newData = parseInt(currentData["amount"]) + parseInt(data))
    : (newData = 0 + parseInt(data));

  return localforage.setItem("data", {
    amount: typeof newData === "number" ? newData : 0,
  });
}
