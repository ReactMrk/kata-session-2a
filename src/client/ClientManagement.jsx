import { useState } from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";

const ClientManagement = () => {
  const [client, setClient] = useState([]);
  return (
    <>
      <ClientForm setClient={setClient}/>
      <ClientList client={client}/>
    </>
  )
};

export default ClientManagement;