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
      return address.name && address.street && address.city && address.zipCode;
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="planetOption">
        <label htmlFor="planet"></label>
        <select id="planet" name="planet" value={address.planet} onChange={handleChange} required>
          <option value="">Qual planeta?</option>
          <option value="Earth">TERRA</option>
          <option value="Mars">MARTE</option>
        </select>
      </div>
      {address.planet === 'Mars' && (
        <div className="route">
          <label htmlFor="location"></label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="ROTA"
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
            <label htmlFor="name">NOME</label>
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
            <label htmlFor="street">ENDEREÇO</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="city">
            <label htmlFor="city">CIDADE</label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city || ''}
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
      <button type="submit">CADASTRAR</button>
    </form>
  );
};

export default AddressForm;
