import { useState } from 'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_NAME': {
//       return {
//         ...state,
//         name: action.value
//       }
//     }
//     .
//     .
//     .
//     case 'CLEAR' : {
//       return initalFormValue;
//     }
//   }
// };

const ClientForm = ({ setClient }) => {
  //const [form, dispatchForm] = useReducer(some parameters are needed);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const submitEmployee = () => {
    setClient((prevClient => {
     return [
        ...prevClient,
        {
          name,
          email,
          phone,
          address
        }
      ]
    }));
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => setName(value.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={value => setEmail(value.target.value)} value={email} />
      <input type="tel" placeholder="Phone" onChange={value => setPhone(value.target.value)} value={phone} />
      <input type="text" placeholder="Address" onChange={value => setAddress(value.target.value)} value={address} />
      <button onClick={() => submitEmployee()}>Add client</button>
      {/* <button onClick={() => dispatchForm({ type: 'CLEAR' })}>Clear</button> */}
    </div>
  )
}

export default ClientForm
