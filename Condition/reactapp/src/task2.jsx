import react from 'react';

function listRender() {
    const products = ["Laptop", "Mobile", "Headphones", "Keyboard"];
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
}

export default listRender;