import React from 'react';
import Header from './Header';
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className={styles.container} >{props.children}</div>
    </div>
  );
};

export default Layout;
