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
        <label><Link to="/register">+ new address</Link></label>
      </div>
      <ul>
        {addresses.map(address => (
          <div className="address-container" key={address.id}>
            {address.planet === 'Mars' ? (
              <>
                <li>{`Planet: ${address.planet}`}</li>
                <li>{`Location: ${address.location}`}</li>
              </>
            ) : (
              <>
                <li>{`Planet: ${address.planet}`}</li>
                <li>{`Name: ${address.name}`}</li>
                <li>{`Street: ${address.street}`}</li>
                <li>{`City: ${address.city}`}</li>
                <li>{`Country: ${address.country}`}</li>
                <li>{`Zip Code: ${address.zipCode}`}</li>
              </>
            )}
            <li>
              <Link to={`/edit/${address.id}`}>edit</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
