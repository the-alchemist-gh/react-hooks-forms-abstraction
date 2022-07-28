import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const[formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    phoneNumber: "0241068234",
    admin: true
  })

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value
    })
  

  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    setFormData({firstName: " ",
    lastName: "",
    phoneNumber: "",
    admin: false})
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName} 
      />
      <input 
        type="text" 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input 
        type="number"
        name = "phoneNumber"
        onChange={handleChange} 
        value={formData.phoneNumber} 
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

