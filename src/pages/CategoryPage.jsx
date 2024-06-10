import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const CategoryPage = () => {
    const { category } = useParams();
    const { products } = useContext(ShopContext);

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products In Category: {category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                        <img className="w-full h-48 object-cover rounded-md mb-4" src={product.thumbnail} alt="" />
                        <div className="flex justify-between items-center">
                            <div className="text-lg font-bold">Price: ${product.price}</div>
                            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
