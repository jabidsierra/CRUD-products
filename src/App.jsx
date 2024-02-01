import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import ProductsForm from './components/ProductsForm.jsx'
import Button from './components/Button.jsx'
import ProductsList from './components/ProductsList.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const [productsUpdate, setProductsUpdate] = useState(null);

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios
      .get("https://crud-users-new-dev-snbf.4.us-1.fl0.io/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  };

  const addProducts = (productsData) => {
 
    axios
      .post("https://crud-users-new-dev-snbf.4.us-1.fl0.io/", productsData)
      .then(() => getData())
      .catch((error) => console.error(error));
  };
  const deleteProducts = (idProducts) => {
    axios
      .delete(`https://crud-users-new-dev-snbf.4.us-1.fl0.io/${idProducts}/`)
      .then(() => getData())
      .catch((error) => console.error(error));
  };

  const selectProducts = (productsData) => {
    setProductsUpdate(productsData);
  };

  const productsActualization = (productsData) => {
    
    axios
      .put(`https://crud-users-new-dev-snbf.4.us-1.fl0.io/${productsData.id}/`, productsData)
      .then(() => {
        getData();
        setUserUpdate(null);
      })
      .catch((error) => console.error(error));
  };

  return (
  <div className="App">
      <ProductsForm
        createProducts={(data) => addProducts(data)}
        selectedProducts={productsUpdate}
        updateProducts={(data) => productsActualization(data)}
      />
      <ProductsList
        productsData={products}
        deleteProductsAction={(id) => deleteProducts(id)}
        selectProducts={(data) => selectProducts(data)}
      />
     
  </div>
  )
}

export default App
