import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../ProjectCss/style.css';


const CreateAccount = () => {
  const navigate = useNavigate();
  let initialValues = {
    fName: '',
    lName: '',
    dob: '',
    password: '',
    email: '',
    role: 'customer',          
  };

  let onSubmit = async (info) => {
    try {
      let result = await axios({
        url: `http://localhost:3001/users/create`,
        method: 'post',
        data: info,
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      });
      navigate('/registration-success');
    } catch (error) {
      console.log('unable to create');
    }
  };

  let validationSchema = yup.object({
    fName: yup.string().required('Full Name is required. '),
    lName: yup.string().required('Full Name is required. '),
    dob: yup.string().required('DOB is required. '),
    password: yup.string().required('Password is required. '),
    email: yup.string().required('Email is required. '),
    role: yup.string(),
  });

  let roleOptions = [
    {
      label: 'Select Role',
      value: '',
      disabled: true,
    },
    {
      label: 'Admin',
      value: 'admin',
    },
    {
      label: 'Customer',
      value: 'customer',
    },
    {
      label: 'superAdmin',
      value: 'superAdmin',
    },
  ];

  return (
    <div className="form-container">
      <h2 className="form-title">Create Account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="form-element-spacing">
                <label htmlFor="fName">First Name:</label>
                <input
                  type="text"
                  id="fName"
                  //a convenient way to attach Formik's field management functionality to 
                  // a form input element in your React application.
                  {...formik.getFieldProps('fName')}
                  className="form-input"
                  required
                />
              </div>
              <ErrorMessage name="fName" component="div" className="error-message" />

              <div className="form-element-spacing">
                <label htmlFor="lName">Last Name:</label>
                <input
                  type="text"
                  id="lName"
                  {...formik.getFieldProps('lName')}
                  className="form-input"
                  required
                />
              </div>
              <ErrorMessage name="lName" component="div" className="error-message" />

              <div className="form-element-spacing">
                <label htmlFor="dob">DOB:</label>
                <input
                  type="date"
                  id="dob"
                  {...formik.getFieldProps('dob')}
                  className="form-input"
                  required
                />
              </div>
              <ErrorMessage name="dob" component="div" className="error-message" />

              <div className="form-element-spacing">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className="form-input"
                  required
                />
              </div>
              <ErrorMessage name="email" component="div" className="error-message" />

              <div className="form-element-spacing">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps('password')}
                  className="form-input"
                  required
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />

              <div className="form-element-spacing">
                <label htmlFor="role">Role:</label>
                <select id="role" {...formik.getFieldProps('role')} className="form-select" required>
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <ErrorMessage name="role" component="div" className="error-message" />

              <button type="submit" className="form-button">
                Create Account
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateAccount;

