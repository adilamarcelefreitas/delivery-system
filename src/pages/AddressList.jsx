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
          <React.Fragment key={address.id}>
            {address.planet === 'Mars' ? (
              <>
                <li>{`${address.planet}`}</li>
                <li>{`${address.location}`}</li>
              </>
            ) : (
              <>
                <li>{`${address.planet}`}</li>
                <li>{`${address.name}`}</li>
                <li>{`${address.street}`}</li>
                <li>{`${address.city}`}</li>
                <li>{`${address.country}`}</li>
                <li>{`${address.zipCode}`}</li>
              </>
            )}
            <li>
              <Link to={`/edit/${address.id}`}>edit</Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
