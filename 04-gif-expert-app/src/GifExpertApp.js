import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const list = ['Dragon Ball'];
  const [categories, setCategories] = useState(list);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map( category => <GifGrid key={ category } category={category} />)
        }
      </ol>
    </>
  );
}

export default GiftExpertApp;
