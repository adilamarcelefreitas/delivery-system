import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddressContext } from '../context/AddressContext';
import '../components/AddressList.css';

const AddressList = () => {
  const { addresses } = useContext(AddressContext);

  return (
    <div className="list-box">
      <div className="header-list">
      <h2>Addresses List</h2>
     <label><Link to="/register"> + new address</Link></label>
      </div>
      <ul>
        {addresses.map(address => (
          <li key={address.id}>
            {address.planet === 'Mars' ? 
            `${address.name}, 
             ${address.location}` : 
           ` ${address.name} 
             ${address.street}
             ${address.city} 
             ${address.zipCode}`}
            <Link to={`/edit/${address.id}`}>edit</Link>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default AddressList;
