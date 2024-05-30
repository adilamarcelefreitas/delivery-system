import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';

const RegisterAddress = () => {
  const { addAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleRegister = (address) => {
    addAddress(address);
    navigate('/');
  };

  return (
    <div>
      <h2>Register Address</h2>
      <AddressForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterAddress;
