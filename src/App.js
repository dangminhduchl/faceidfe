import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import LeftDrawer from './Navigation/LeftDrawer'
import { makeStyles } from '@material-ui/core';
import MainRoute from './Routes/MainRoute';
const mySytle = makeStyles((theme) =>(
  {
    root :  {
              display :'flex',
              textAlign : 'center',
              flexDirection : 'column',
            },
    route :  {
                display : 'fixed',
                top : '0%',
                left : '0%',
              },
  }
))
function App()
{
    const myclass = mySytle();
    return (
        <div className = {myclass.root}>
            <Router>
              <LeftDrawer/>
              <MainRoute className = {myclass.route}/>
            </Router>
        </div>
    );
}

export default App;