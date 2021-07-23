import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Login from './screens/Login'
import Register from './screens/Register'
import MainContainer from './containers/MainContainer'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/users')
  };

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/users')
  };
  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>

          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path='/'>
            <MainContainer />
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
