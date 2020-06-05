import * as React from 'react';

import styles = require('./styles.scss');

interface LayoutProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>DEV Labs</header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>DEV Labs 2019-presence</footer>
    </div>
  );
};

export default Layout;
