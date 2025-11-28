
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
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="page">Loading products...</div>;
  if (error) return <div className="page" style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="page">
      <h2 className="page-title">Products on Stock!</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
