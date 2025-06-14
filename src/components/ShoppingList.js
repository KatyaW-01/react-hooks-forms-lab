import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const [newItems, setNewItems] = useState(items)

  const [searchTerm, setSearchTerm] = useState('')

  const itemsToDisplay = newItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const [formData, setFormData] = useState({name: "", category: "Produce"}) //set default category so can't be blank
  
 

  return (
    <div className="ShoppingList">
      <ItemForm formData={formData} setFormData={setFormData} setNewItems={setNewItems} />
      <Filter onCategoryChange={handleCategoryChange} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
