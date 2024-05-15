import React from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  Typography,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import form from "../../assets/images/contact/form img.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contact: Yup.string().required("Phone Number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={10}
            sx={{ paddingY: { sm: "120px", xs: "50px" }, px: "0" }}
          >
            <Grid item md={6} order={{ md: 1, xs: 2 }}>
              <Box sx={{ paddingX: "0px" }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: { md: "50px", xs: "40px" },
                    }}
                  >
                    Contact Us.
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.darkGray,
                      fontSize: "18px",
                      mt: "10px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto cupiditate aperiam neque.
                  </Typography>
                </Box>

                <Box sx={{ mt: "40px" }}>
                  <form
                    onSubmit={formik.handleSubmit}
                    onReset={formik.handleReset}
                  >
                    <FormControl
                      sx={{
                        width: "100% !important",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#0000001a",
                            borderWidth: "3px",
                          },

                          "&.Mui-focused fieldset": {
                            borderColor: "#f9004d",
                            borderWidth: "3px",
                          },
                        },
                        "& label.Mui-focused": {
                          color: "#f9004d",
                          fontSize: "16px",
                          fontWeight: "500",
                        },
                        "& label": {
                          color: "#000000, opacity 45.0%",
                          fontSize: "16px",
                          fontWeight: "500",
                        },
                      }}
                    >
                      <Box sx={{ mb: "23px" }}>
                        <TextField
                          label="First Name"
                          id="firstName"
                          name="firstName"
                          variant="outlined"
                          fullWidth
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                          }
                          helperText={
                            formik.touched.firstName && formik.errors.firstName
                          }
                        />
                      </Box>

                      <Box sx={{ mb: "23px" }}>
                        <TextField
                          label="Your Email"
                          id="email"
                          name="email"
                          variant="outlined"
                          fullWidth
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </Box>

                      <Box sx={{ mb: "23px" }}>
                        <TextField
                          label="Phone Number"
                          id="contact"
                          name="contact"
                          variant="outlined"
                          fullWidth
                          value={formik.values.contact}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.contact &&
                            Boolean(formik.errors.contact)
                          }
                          helperText={
                            formik.touched.contact && formik.errors.contact
                          }
                        />
                      </Box>

                      <Box sx={{ mb: "23px" }}>
                        <TextField
                          label="Subject"
                          id="subject"
                          name="subject"
                          variant="outlined"
                          fullWidth
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.subject &&
                            Boolean(formik.errors.subject)
                          }
                          helperText={
                            formik.touched.subject && formik.errors.subject
                          }
                        />
                      </Box>

                      <Box sx={{ mb: "23px" }}>
                        <TextField
                          label="Your Message"
                          id="message"
                          multiline
                          rows={4}
                          name="message"
                          variant="outlined"
                          fullWidth
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                          }
                          helperText={
                            formik.touched.message && formik.errors.message
                          }
                        />
                      </Box>

                      <Box>
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{
                            color: "white",
                            border: "3px solid white",
                            fontSize: { sm: "18px" },
                            backgroundColor: theme.palette.red,
                            letterSpacing: "2px",
                            ml: "0",
                            p: {
                              md: "12px 30px",
                              sm: "10px 30px",
                              xs: "8px 15px",
                            },
                            borderRadius: "8px",
                            mt: { md: "2px", xs: "5px" },
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "white",
                              color: `${theme.palette.red}`,
                              border: `3px solid ${theme.palette.red}`,
                            },
                          }}
                        >
                          SUBMIT NOW
                        </Button>
                      </Box>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} order={{ md: 2, xs: 1 }}>
              <Box sx={{ height: "100%" }}>
                <img
                  src={form}
                  style={{ borderRadius: "8px", objectFit: "contain" }}
                  alt="Form Image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
