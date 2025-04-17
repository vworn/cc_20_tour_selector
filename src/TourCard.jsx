import React from 'react';

export default function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;
  return (
    <article style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
      />
      <div style={{ marginTop: '0.5rem' }}>
        <h2>{name}</h2>
        <p>{info}</p>
        <p style={{ fontWeight: 'bold' }}>${price}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </article>
  );
}

//display tour details and add “Not Interested” button to remove a tour