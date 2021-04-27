import React from "react";
import Link from "next/link";
import styles from "../../styles/container.module.css";

const Navbar = (props) => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">
          <img src="logo.svg" alt="Globant Bootcamp" className={styles.logo} />
        </Link>
        <ul className={styles.navbarLinks}>
          <Link href="/">
            <li>
              <a href="" className={styles.navbarLink}>
                Inicio
              </a>
            </li>
          </Link>
          <Link href="/explore">
            <li>
              <a href="" className={styles.navbarLink}>
                Explorar
              </a>
            </li>
          </Link>

          <Link href="/fight">
            <li>
              <a href="" className={styles.navbarLink}>
                Fight!
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
