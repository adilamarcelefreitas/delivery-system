import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';
import '../components/AddressForm';
import '../components/RegisterAddress.css'


const RegisterAddress = () => {
  const { addAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleRegister = (address) => {
    addAddress(address);
    navigate('/list');
  };

  return (
    <div className="register">
      <h1>PLANET DELIVERY </h1>
      <AddressForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterAddress;
