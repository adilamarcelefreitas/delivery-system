import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import { AddressContext } from '../context/AddressContext';
import '../components/EditAddress.css'

const EditAddress = () => {
  const { id } = useParams();
  const { getAddressById, updateAddress } = useContext(AddressContext);
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const addr = getAddressById(Number(id));
    if (addr) {
      setAddress(addr);
    } else {
      navigate('/list');
    }
  }, [id, getAddressById, navigate]);

  const handleEdit = (updatedAddress) => {
    updateAddress(updatedAddress);
    navigate('/list');
  };

  if (!address) return <div>Loading...</div>;

  return (
    <><div className="edit">
      <h2>Editing address</h2>
      <p>Check your infomations again and submit </p>
    </div><AddressForm initialData={address} onSubmit={handleEdit} /></>
  );
};

export default EditAddress;
