import React from 'react';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import CircularProgress from '@material-ui/core/CircularProgress';

import s from './App.module.scss';
import FirebaseContext from './context/firebaseContext';
class App extends React.Component {
  state = {
    user: null
  }
  
  componentDidMount() {
    const { auth, setUserUid } = this.context;

    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
        this.setState({ user });
      } else {
        setUserUid(false);
        this.setState({ user: false })
      }
    })
  }

  render() {
    const { user } = this.state;

    if (user === null) {
      return (
        <div className={s.loader}>
          <CircularProgress disableShrink />
        </div>
      );
    }

    return (
      <>
        { user ? <HomePage user={user} /> : <LoginPage />}
      </>
    );
  }
}

App.contextType = FirebaseContext;

export default App;
