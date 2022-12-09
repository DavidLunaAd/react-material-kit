import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { firebasecrearCliente, firebaseCrear } from '../utils/FirebaseUtil'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';




const EditProduct = () => {
  const navigate = useNavigate();

  const crearProducto = (producto) =>{
    firebaseCrear('productos', producto);
    navigate('/app/products', { replace: true }); 
    };

  return (
    <>
      <Helmet>
        <title>Cargar nuevo producto</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              description: '',
              media: '',
              title: '',
              totalDownload: '',
            }}
            validationSchema={
            Yup.object().shape({
              description: Yup.string().max(255).required('Description is required'),
              media: Yup.string().max(255).required('Media is required'),
              title: Yup.string().max(60).required('Title is required'),
              totalDownload: Yup.string().max(255),
            })
          }
            onSubmit={(producto) => {
             crearProducto(producto);            
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Cargar nuevo producto
                  </Typography>
                
                </Box>
                <TextField
                  error={Boolean(touched.description && errors.description)}
                  fullWidth
                  helperText={touched.description && errors.description}
                  label="Descripción"
                  margin="normal"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.media && errors.media)}
                  fullWidth
                  helperText={touched.media && errors.media}
                  label="Media"
                  margin="normal"
                  name="media"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.media}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.title && errors.title)}
                  fullWidth
                  helperText={touched.title && errors.title}
                  label="Title"
                  margin="normal"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.title}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.totalDownload && errors.totalDownload)}
                  fullWidth
                  helperText={touched.totalDownload && errors.totalDownload}
                  label="totalDownload"
                  margin="normal"
                  name="totalDownload"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.totalDownload}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Crear
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default EditProduct;
