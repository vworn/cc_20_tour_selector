/* src/App.jsx */
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import DestinationSelector from './DestinationSelector';

const API_URL = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  // Fetch tours data
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Remove a tour by id
  const handleRemoveTour = id => {
    setTours(prev => prev.filter(tour => tour.id !== id));
  };

  // Filter tours based on selection
  const filteredTours =
    selectedDestination === 'All Destinations'
      ? tours
      : tours.filter(tour => tour.name === selectedDestination);

  // Get unique tour names
  const tourNames = ['All Destinations', ...new Set(tours.map(t => t.name))];

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Tour Destination Selector</h1>
      <DestinationSelector
        options={tourNames}
        value={selectedDestination}
        onChange={setSelectedDestination}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleRemoveTour}
        onRefresh={fetchTours}
      />
    </main>
  );
}