import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => {

  // const Acces = () => {

  //   const navigate = useNavigate();

  //  if (sessionStorage.getItem('logged') === 'true'){
  //   alert(sessionStorage.getItem('logged'));
  //   navigate('/login')
  //  }else{
  //   navigate ('/dashboard')
  //  }
  //  };
  
return(
    <>
      <AppBar
        elevation={0}
        {...props}
       >
        <Toolbar sx={{ height: 64 }}>
          <RouterLink to='/dashboard'>
            <Logo />
          </RouterLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavbar;
