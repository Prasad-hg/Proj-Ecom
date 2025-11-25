// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        if (mounted) setProducts(res.data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div style={{padding:20}}>Loading products...</div>;
  if (error) return <div style={{padding:20,color:'red'}}>{error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
};

export default Home;
