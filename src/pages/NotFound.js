import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';

const NotFound = () => (
  <>
    <Helmet>
      <title>404 | Material Kit</title>
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
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: Parece que esta página no se encuentra
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
         O intentaste una ruta sombría o viniste aquí por error.
          Sea lo que sea, intenta usar la navegación.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src="/static/images/undraw_page_not_found_su7k.svg"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
