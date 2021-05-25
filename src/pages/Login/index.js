import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import s from './Login.module.scss';
import FirebaseContext from '../../context/firebaseContext';

class LoginPage extends React.Component {
	state = {
    email: '',
    password: ''
	}
	
  onEmailChange = (e) => {
    this.setState({
        email: e.target.value
    })
	} 
	
  onPasswordChahge = (e) => {
    this.setState({
      password: e.target.value
    })
	}
	
  onSignin = () => {
		const { email, password } = this.state;
		const { signWithEmail } = this.context;

		signWithEmail(email, password);
  }

  onSignup = () => {
		const { email, password } = this.state;
		const { signUp } = this.context;

		signUp(email, password);
  }

  render() {

    return (
				<Paper elevation={3} className={s.container}>
					<div>
						<Avatar className={s.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5" className={s.typography}>
							Заходите на сайт, всегда Вам рады!
						</Typography>
						<form>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Электронная почта"
								name="email"
								autoComplete="email"
								autoFocus
								value={this.state.email}
								onChange={this.onEmailChange}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Пароль"
								type="password"
								id="password"
								autoComplete="current-password"
								value={this.state.password}
								onChange={this.onPasswordChahge}
							/>
              <div className={s.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={s.button}
                  onClick={this.onSignin}
                >
                  Войти
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className={s.button}
                  onClick={this.onSignup}
                >
                  Регистрация
                </Button>
              </div>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Забыли пароль?
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</Paper>
    );
  }
}

LoginPage.contextType = FirebaseContext;

export default LoginPage;