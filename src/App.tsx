import React from 'react';
import Form from './componets/Form';
import './app.css';

export type User = {
  name: string;
  email: string;
  phone: string;
  document: string;
  haveCar: boolean;
  birthdate: string;
  gender: "F"|"M"
}

const formDefaultValue: User = {
  name: '',
  email: '',
  phone: '',
  document: '',
  haveCar: false,
  birthdate: '',
  gender: "F",

}

function App() {
  const [form, setForm] = React.useState<User>(formDefaultValue)
  return (
    <div className='container'>
      <Form
        form={form}
        setForm={setForm}
      />
    </div>
  );
}

export default App;
