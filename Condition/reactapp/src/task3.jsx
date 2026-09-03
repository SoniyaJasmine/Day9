import react from 'react';

function ternaryOperator() {
    const products = [
        { name: "Laptop", available: true },
        { name: "Mobile", available: false },
        { name: "Headphones", available: true }
    ];

    return (
        <div>
            <h1>Product List</h1>

            {products.map((product) => (
                <div key={product.name}>
                    <h3>{product.name}</h3>

                    {product.available ? (
                        <button>Buy Now</button>
                    ) : (
                        <p>Out of Stock</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ternaryOperator; 