import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePicker";
import axios from "axios";

function NewTransaction() {
  const initialValues = {
    description: "",
    date: new Date(),
    accountId: 1,
    amount: "",
  };
  const onSubmit = (data: {
    description: string;
    date: Date;
    accountId: number;
    amount: any;
  }) => {
    const modDate = data.date.toISOString().split("T")[0];
    const transaction = {
      description: data.description,
      date: modDate,
      AccountId: data.accountId,
      amount: data.amount,
    };
    axios
      .post("http://localhost:3001/transactions", transaction)
      .then((response) => {
        console.log("it Worked!");
      });
  };
  const validationSchema = Yup.object().shape({
    description: Yup.string().required(),
    date: Yup.date().required(),
    accountId: Yup.number().required(),
    amount: Yup.number().required(),
  });
  return (
    <>
      <div className="card form">
        <h5 className="card-title">New Transaction</h5>
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            //   validator={() => ({})}
            validationSchema={validationSchema}
          >
            <Form>
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <ErrorMessage name="description" component="p" />
              <Field
                id="descriptionInput"
                className="form-control"
                name="description"
                placeholder="desc"
              />

              <label htmlFor="accountId" className="form-label">
                Account
              </label>
              <ErrorMessage name="accountId" component="span" />
              <Field as="select" className="form-select" name="accountId">
                <option value="1">Red</option>
                <option value="2">Green</option>
                <option value="3">Blue</option>
              </Field>
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <ErrorMessage name="amount" component="p" />
              <Field
                id="amountInput"
                className="form-control"
                name="amount"
                placeholder="100.00"
              />
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <p></p>
              <ErrorMessage name="date" component="span" />
              <DatePickerField name="date" />
              <p></p>
              <button type="submit" className="btn btn-primary">
                Add New
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default NewTransaction;
