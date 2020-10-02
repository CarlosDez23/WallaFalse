import React, { useState } from "react";
import { useFormikContext } from "formik";

//Componentes
import ErrorMessage from "./ErrorMessage";

//Paleta de colores
import CustomPicker from "../CustomPicker";

function AppFormPicker({ items, placeholder, name, widthValue }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <CustomPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        widthValue={widthValue}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
