import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const {formData, setFormData, setNewItems} = props

  function handleChange(event) {
    const {name,value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, [name]:value
      
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setNewItems(prevItems => {
      const newItem = {
        id: prevItems.length + 1,  
        ...formData             
      };
      return [...prevItems, newItem];
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
