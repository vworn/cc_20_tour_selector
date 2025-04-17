import React from 'react';
import TourCard from './TourCard';

export default function Gallery({ tours = [], loading, error, onRemove, onRefresh }) {
  if (loading) return <p style={{ textAlign: 'center' }}>Loading tours...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (tours.length === 0)
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );

  return (
    <section style={{ display: 'grid', gap: '1rem', padding: '1rem' }}>
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </section>
  );
}
