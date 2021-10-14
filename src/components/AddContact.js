import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { addContact } from "../redux/reducers/ContactActionCreators";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number || !setName) {
      return toast.warning("Please fill in all fields");
    }

    const checkEmail = contacts.find((contact) => contact.email === email);

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (checkEmail) {
      return toast.error("This email already exists.");
    }

    if (checkNumber) {
      return toast.error("This number already exists.");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch(addContact(data));
    toast.success("Student added successfully.");
    history.push("/");
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='display-3 my-5 text-center'>Add Student</h1>
        <div className='col-md-6 shadow mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control'
                placeholder='Phone-number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                className='form-control btn btn-block btn-dark'
                value='Add Student'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
