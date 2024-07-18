import { useState } from 'react';

import styles from './InputAuthorization.module.scss';

const InputAuthorization = () => {

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length > 0 && newPassword.length < 8) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  };

  return (
    <div className={styles.input__authorization}>
      <div className={styles.input__block}>
        <label htmlFor="email" className={styles.input__email}>Email</label>
        <input type="email" className={styles.input__email__add} required />
      </div>
      <div className={`${styles.input__block} ${isPasswordError ? styles.input__block__error : ''}`}>
        <label htmlFor="password" className={styles.input__password}>Пароль: 8 символов</label>
        <input
          type="password"
          id="password"
          className={styles.input__password__add}
          minLength="8"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
    </div>
  );
};

export default InputAuthorization;
