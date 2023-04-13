import React from "react";
import Modal from "react-modal";
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};



const Form = ( { createProducts, selectedProducts, updateProducts } ) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  

  useEffect(() => {
      if( selectedProducts ){ 
          
          reset( selectedProducts )    
      }else{
          
          emptyForm()
      }

  }, [ selectedProducts ]);


  const submit = data => {
      if( selectedProducts ){
          updateProducts( data )

      }else{
          createProducts( data )
          emptyForm()
      }
  }

  const emptyForm = () => {
      reset(
          {
              name: "",
              category: "",
              price: "",
              isAvailable: ""
          }
      )
  }

  return (
    
      <form onSubmit={ handleSubmit( submit ) }>
        <h2 className="title">Agregar Nuevo Producto</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" 
          id="name" 
          name="name"
          placeholder="Nombre del producto"
          { ...register("name", {required: true}) }/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <input type="text" 
          id="category" 
          name="category"
          placeholder="Categoría"
          { ...register("category", {required: true}) }/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="number" 
          id="price" 
          name="price"
          placeholder="Precio"
          { ...register("price", {required: true}) }/>
        </div>
        <div className="form-group">
          <label htmlFor="isAvailable">Disponibilidad:</label>
          <input type="checkbox" 
          id="isAvailable" 
          name="isAvailable"
          { ...register("isAvailable", {required: true}) }/>
        </div>
        
        
        <button className="buttonForm" type="submit">Submit</button>
      </form>
  
  );
}

export default Form;


