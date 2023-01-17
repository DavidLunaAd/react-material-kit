import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { firebaseiniciarSesion, firebaseRegistrarUsuario } from 'src/utils/FirebaseUtil';

const Login = () => {
  const navigate = useNavigate();

  const iniciarSesion = async  credenciales =>{
    let sesionIniciada= await firebaseiniciarSesion(credenciales.email, credenciales.password, credenciales.User);

    if(sesionIniciada){
      let nombre = document.getElementById("nombre");
      sessionStorage.setItem("emailLo", credenciales.email);
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("logged", true);
      
      alert('Acceso correcto ' + sessionStorage.getItem('emailLo') + ' ' + sessionStorage.getItem('nombre'));
      navigate('/app/dashboard', { replace: true });
    }else{
      alert("Credenciales incorrectas")
    }

  }

  return (
    <>
      <Helmet>
        <title>Login</title>
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
              nombre: 'Juanito',
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={iniciarSesion}
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
                    Logueate
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Regístrate en la plataforma interna
                  </Typography>
                </Box>
                
                <TextField
                  fullWidth
                  helperText={touched.nombre && errors.nombre}
                  label= "Nombre"
                  margin="normal"
                  name="nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.nombre}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
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
                    Iniciar sesión
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  No tienes una cuenta?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h5" underline="hover">
                    Registrate
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
