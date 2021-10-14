import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { editContact } from "../redux/reducers/ContactActionCreators";

function EditContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number || !setName) {
      return toast.warning("Please fill in all fields");
    }

    const checkEmail = contacts.find(
      (contact) => contact.id != parseInt(id) && contact.email === email
    );

    const checkNumber = contacts.find(
      (contact) =>
        contact.id != parseInt(id) && contact.number === parseInt(number)
    );
    console.log(checkNumber);
    if (checkEmail) {
      return toast.error("This email already exists.");
    }

    if (checkNumber) {
      return toast.error("This number already exists.");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    console.log(data);

    dispatch(editContact(data));
    toast.success("Student updated successfully.");
    history.push("/");
  };

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  return (
    <div className='container'>
      {currentContact ? (
        <>
          <div className='row'>
            <h1 className='display-3 my-5 text-center'>Edit Student {id}</h1>
            <div className='col-md-6 shadow my-2 mx-auto p-5'>
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
                    className='form-control btn btn-dark'
                    value='Update Student'
                  />
                  <Link
                    to='/'
                    className='form-control btn btn-danger ml-3'
                    value='Add Student'
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className='display-3 my-5 text-center'>
          Student with id {id} does not exist.
        </h1>
      )}
    </div>
  );
}

export default EditContact;
