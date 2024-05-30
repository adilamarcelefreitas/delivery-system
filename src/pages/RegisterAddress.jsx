import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';
import '../components/AddressForm';


const RegisterAddress = () => {
  const { addAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleRegister = (address) => {
    addAddress(address);
    navigate('/');
  };

  return (
    <div className="register">
      <h1>PLANET DELIVERY </h1>
      <h2>Click bellow and choose your planet for delivery</h2>
      <AddressForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterAddress;
