import React, { createContext, useState } from 'react';

export const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = (address) => {
    setAddresses([...addresses, { ...address, id: Date.now() }]);
  };

  const updateAddress = (updatedAddress) => {
    setAddresses(addresses.map(addr => addr.id === updatedAddress.id ? updatedAddress : addr));
  };

  const getAddressById = (id) => {
    return addresses.find(addr => addr.id === id);
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, updateAddress, getAddressById }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
