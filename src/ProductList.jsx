import React from "react";

const ProductList = () => {
    const products = [
        { name: "Laptop", price: 500, isInStock: true },
        { name: "Phone", price: 300, isInStock: false },
        { name: "Headphones", price: 50, isInStock: true },
    ];

    const cardStyle = {
        border: "1px solid #333",
        borderRadius: "6px",
        padding: "16px",
        width: "150px",
        textAlign: "center",
    };

    const containerStyle = {
        display: "flex",
        gap: "20px",
    };

    return (
        <div style={containerStyle}>
            {products.map((product, index) => (
                <div
                    key={index}
                    style={{
                        ...cardStyle,
                        backgroundColor: product.isInStock ? "#fff" : "#f0f0f0",
                    }}
                >
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>

                    {!product.isInStock && (
                        <p style={{ color: "red" }}>Out of Stock</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
