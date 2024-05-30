import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddressContext } from '../context/AddressContext';

const AddressList = () => {
  const { addresses } = useContext(AddressContext);

  return (
    <div>
      <h2>Address List</h2>
      <Link to="/register">Register New Address</Link>
      <ul>
        {addresses.map(address => (
          <li key={address.id}>
            {address.planet === 'Mars' ? `Location: ${address.location}` : `${address.name}, ${address.street}, ${address.city}, ${address.zipCode}`}
            <Link to={`/edit/${address.id}`}> Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
