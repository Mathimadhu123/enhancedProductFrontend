// import React from 'react'
// import Container from 'react-bootstrap/esm/Container'
// import { useState, useEffect } from 'react';

// const LandingPage = () => {
//   const [products, setProduct] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")

//       .then((response) => {

//         if (!response.ok) {
//           throw new Error("failed to fetch data")
//         } return response.json();
//       })

//       .then((data) => setProduct(data))

//   }, []);


//   return (
//     <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Welcome to Our Store</h1>
//       <p>Find the best products at great prices!</p>
//       <div key={products.id}>
//         <img src={products.image}></img>
//         <h3 >{products.title}</h3>
//         <p >${products.price}</p>
//       </div>
//       <button >Add to Cart</button>

//     </div>
//   )
// }

// export default LandingPage
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  // State variables
  const [products, setProducts] = useState([]);  // Store products
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error handling
  const [searchQuery, setSearchQuery] = useState("");  // Search input state

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1>Welcome to GlamWear</h1>
        <p>Find the best fashion products at great prices!</p>
      </div>

      {/* Search Bar
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div> */}

      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="d-flex align-items-center position-relative" style={{ maxWidth: "400px", width: "100%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            style={{ paddingRight: "45px" }} // Increased padding to prevent overlap
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch
            className="position-absolute text-secondary"
            style={{ right: "15px", cursor: "pointer", fontSize: "18px" }} // Adjusted position & size
          />
        </div>
      </div>


      {/* Product List */}
      <h2 style={styles.title}>Product List</h2>
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.title} style={styles.image} />
              <h3 style={styles.productTitle}>{product.title}</h3>
              <p style={styles.price}>${product.price}</p>
              <p style={styles.description}>
                {product.description.substring(0, 50)}...
              </p>
              <button style={styles.button}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No products found!</p>
        )}
      </div>
    </div>
  );
}

// Styling using JS object
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    background: "linear-gradient(to right,rgb(250, 107, 255), #f06595)",
    color: "white",
    padding: "40px",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  productTitle: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#27ae60",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    background: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  noResults: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default App;
