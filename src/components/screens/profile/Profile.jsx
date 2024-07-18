import Layout from '../../layout/Layout';
import Header from '../../header/Header';
import InterfaceApp from '../../ui/interface-app/InterfaceApp';
import Buttons from '../../ui/buttons/Buttons';

import { arrayButtonProfile } from '../../screens/profile/buttonsProfile.data';
import styles from './Profile.module.scss';


const Profile = () => {
  return (
    <Layout>
      <Header />
      <div className={styles.header__profile}>
        <img src="/icons/arrow left.svg" alt="arrow" />
        <h1 className={styles.header__title}>Профиль</h1>
        <img src="/icons/profile/settings.svg" alt="settings" />
      </div>
      <div className={styles.avatar__profile}>
        <div className={styles.avatar__profile__image}>
          <img src="/icons/profile/avatar.svg" alt="avatar" />
        </div>
      </div>
      <div className={styles.buttons__wrapper__profile}>
        {arrayButtonProfile.map(button => (
          <Buttons
            key={button.id}
            id={button.id}
            path={button.path}
            leftIcon={button.leftIcon}
            rightIcon={button.rightIcon}
            title={button.title}
          />
        ))}
      </div>
      <InterfaceApp />
    </Layout>
  );
};

export default Profile;