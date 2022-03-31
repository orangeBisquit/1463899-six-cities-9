import Header from '../../components/header/header';
import {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {getLogin} from '../../store/action';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../utils/const';
import {State} from '../../types/store';


function Login() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const {authorizationStatus} = useAppSelector((state: State) => state);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate('/');
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(getLogin(loginRef.current.value));
    }
  };

  if(authorizationStatus === AuthorizationStatus.Auth) {
    navigate('/');
  }

  return (
    <div className="page page--gray page--login">
      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button"
                type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default Login;
