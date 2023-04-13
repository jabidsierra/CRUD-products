
const ProductsList = ( { productsData, deleteProductsAction, selectProducts } ) => {
    return (
        
            <ul className="bigCard">
    {
         productsData?.map( products => (
         <li className="product-card" key={ products.id }>
        <h4 className="product-name"><span>Nombre:</span> {products.name}</h4>
        <h4 className="product-category"><span>Categoría:</span> {products.category} </h4>
        <h4 className="product-price"><span>Precio:</span> {products.price} </h4>
        <h4 className="product-habitability"><span>Disponibilidad:</span> {products.isAvailable} </h4>

        <button className="delete-btn" onClick={ () => deleteProductsAction( products.id ) }>Eliminar</button>
        <button className="edit-btn" onClick={ () => selectProducts(products) } >Editar</button>
        </li>

    ))
}

</ul>      
    );
};

export default ProductsList;

