import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// const DatePickerField = ({ ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);
//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={(field.value && new Date(field.value)) || null}
//       onChange={(val) => {
//         setFieldValue(field.name, val);
//       }}
//     />
//   );
// };
const DatePickerField = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      className="form-control"
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

export default DatePickerField;
