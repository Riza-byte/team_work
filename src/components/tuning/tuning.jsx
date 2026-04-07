import React from 'react';
import './tuning.css';

const Tuning = () => {
  const services = [
    { id: 1, title: 'Engine Remapping', desc: 'Stage 1, 2+ quvvat oshirish', price: '500$' },
    { id: 2, title: 'Body Kit', desc: 'Aerodinamik bamperlar va spoylerlar', price: '1200$' },
    { id: 3, title: 'Interior Mod', desc: 'Salonni alkantara bilan qoplash', price: '800$' },
  ];

  return (
    <div className="tuning-container">
      <h2 className="tuning-title">AVTOMOBIL TUNING</h2>
      <div className="tuning-grid">
        {services.map((service) => (
          <div key={service.id} className="tuning-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="price">{service.price}</span>
            <button className="tuning-btn">Buyurtma berish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tuning;