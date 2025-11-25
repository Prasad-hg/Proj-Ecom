// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchOne = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        if (mounted) setProduct(res.data);
      } catch (err) {
        if (mounted) setProduct(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchOne();
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <div style={{padding:20}}>Loading...</div>;
  if (!product) return <div style={{padding:20}}>Product not found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.name}</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        <img src={product.imageUrl || 'https://via.placeholder.com/400x300'} alt={product.name} style={{ width: 400, height: 320, objectFit: 'cover' }} />
        <div>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Description:</strong></p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
