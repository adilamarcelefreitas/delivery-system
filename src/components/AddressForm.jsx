import React, { useState } from 'react';
import "./AddressForm.css"

const AddressForm = ({ initialData = {}, onSubmit }) => {
  const [address, setAddress] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAddress(address)) {
      onSubmit(address);
    } else {
      alert('Endereço inválido, reveja seu planeta.');
    }
  };

  const validateAddress = (address) => {
    if (address.planet === 'Mars') {
      return /^\d{4}$/.test(address.location);
    } else if (address.planet === 'Earth') {
      return address.name && address.street && address.country && address.zipCode;
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="planetOption">
        <label htmlFor="planet"></label>
        <select id="planet" name="planet" value={address.planet} onChange={handleChange} required>
          <option id="choice" value="">click here!</option>
          <option id="choice" value="Earth">Terra</option>
          <option id="choice" value="Mars">Marte</option>
        </select>
      </div>
      {address.planet === 'Mars' && (
        <div className="route">
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Lote"
            value={address.location}
            onChange={handleChange}
            pattern="\d{4}"
            required
          />
        </div>
      )}
      {address.planet === 'Earth' && (
        <>
          <div className="customer"> 
            <label htmlFor="name">nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="customerAddress">
            <label htmlFor="street">endereço</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="country">
            <label htmlFor="country">país</label>
            <input
              type="text"
              id="country"
              name="country"
              value={address.country || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cep">
            <label htmlFor="zipCode">CEP</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={address.zipCode || ''}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      <button type="submit">submit</button>
    </form>
  );
};

export default AddressForm;
