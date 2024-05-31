import React, { useState } from 'react';
import "./AddressForm.css"
import "../index.css"

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
      alert('Invalid address. Please review the filled fields.');
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
        <select className="selectPlanet" name="planet" value={address.planet} onChange={handleChange} required>
          <option value="">click here!</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
        </select>
      </div>
      {address.planet === 'Mars' && (
        <div>
          {/* <label htmlFor="name">Recipient</label>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name || ''}
              onChange={handleChange}
              required
            /> */}
          <label htmlFor="location">Route Number</label>
          <input
            type="text"
            id="location"
            name="location"
            value={address.location}
            onChange={handleChange}
            pattern="\d{4}"
            required
          />
           <div className="submitButton"><button type="submit">submit</button></div>
        </div>
        
      )}
      {address.planet === 'Earth' && (
        <>
          <div> 
            <label htmlFor="name">Recipient</label>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="street">Address Line</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={address.country || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="zipCode">Zip/Postal Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={address.zipCode || ''}
              onChange={handleChange}
              required
            />
        <div className="submitButton"><button type="submit">submit</button></div>
          </div>
        </>
      )}
    </form>
  );
};

export default AddressForm;
