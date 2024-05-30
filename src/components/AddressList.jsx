import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddressContext } from '../context/AddressContext';
import './AddressList.css';

const AddressList = () => {
  const { addresses } = useContext(AddressContext);

  return (
    <div className="list">
      <h2>ENDEREÇOS</h2>
      <Link to="/register">Novo Endereço</Link>
      <ul>
        {addresses.map(address => (
          <li key={address.id}>
            {address.planet === 'Mars' ? `Lote: ${address.location}` : `${address.name}, ${address.street}, ${address.city}, ${address.zipCode}`}
            <Link to={`/edit/${address.id}`}> EDITAR</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
