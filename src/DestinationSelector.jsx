import React from 'react';

export default function DestinationSelector({ options, value, onChange }) {
  return (
    <div style={{ margin: '1rem auto', textAlign: 'center' }}>
      <label htmlFor="destination-select" style={{ marginRight: '0.5rem' }}>
        Select Destination:
      </label>
      <select
        id="destination-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}