import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const formikValidation = yup.object({
    name: yup
      .string()
      .min(5, "Name Must Contain Min 5 characters")
      .required("Please Fill The Name"),
    discription: yup
      .string()
      .min(7, "Discription Must Contain Min 7 Characters")
      .required("please Give the Discription"),
    rating: yup.string().min(1).required("please enter the ratings"),
    price: yup
      .string()
      .min(1, "Price must greater then one digit")
      .required("Please Enter the Price"),
    image: yup
      .string()
      .min(7, "image Must Contain Min 7 Characters")
      .required("please Give the image link"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      discription: "",
      rating: "",
      price: "",
      image: "",
    },
    validationSchema: formikValidation,
    onSubmit: async (values) => {
      let Product = await axios.post(
        "https://631d700ecc652771a4859a9c.mockapi.io/Products",
        values
      );
      navigate("/Portal");
    },
  });
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <form className="d-flex flex-column">
            <TextField
              id="outlined-basic"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              variant="outlined"
            />

            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null}

            <TextField
              id="outlined-basic"
              label="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="image"
              variant="outlined"
            />

            {formik.touched.image && formik.errors.image
              ? formik.errors.image
              : null}

            <TextField
              id="outlined-basic"
              label="discription"
              value={formik.values.discription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="discription"
              variant="outlined"
            />

            {formik.touched.discription && formik.errors.discription
              ? formik.errors.discription
              : null}

            <TextField
              id="outlined-basic"
              label="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="rating"
              variant="outlined"
            />

            {formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : null}

            <TextField
              id="outlined-basic"
              label="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="price"
              variant="outlined"
            />

            {formik.touched.price && formik.errors.price
              ? formik.errors.price
              : null}

            <Button
              variant="contained"
              disabled={!formik.isValid}
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
}

export default AddProduct;
