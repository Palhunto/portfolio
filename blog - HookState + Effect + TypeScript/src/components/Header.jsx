import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header () {
    return(
        <header className={styles.header_container}>
        <img src={igniteLogo} alt="logotipo do blog" />
        </header>
    );
}