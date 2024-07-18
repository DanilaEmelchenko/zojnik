import Layout from '../../layout/Layout';
import Header from '../../header/Header';
import InputAuthorization from '../../ui/input-authorization/InputAuthorization';
import Buttons from '../../ui/buttons/Buttons';

import styles from '../authorization/Authorization.module.scss';

const Authorization = () => {
  return (
    <Layout>
      <Header
        title='Вход или регистрация'
      />
      <div className={styles.authorization}>
        <p className={styles.authorization__text}>Укажите email и пароль</p>
        <div className={styles.authorization__phone}>
          <InputAuthorization />
          <div className={styles.authorization__agreement}>
            <label className={styles.authorization__checkbox_container}>
              <input type="checkbox" />
              <span className={styles.authorization__checkmark}></span>
            </label>
            <p className={styles.authorization__agreement__text}>Соглашаюсь с Политикой конфеденциальности и Пользовательским соглашением</p>
          </div>
        </div>
        <Buttons
          title='Войти'
        />
      </div>
    </Layout>
  );
};

export default Authorization;