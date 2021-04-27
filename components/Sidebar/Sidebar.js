import Link from "next/link";
import styles from "../../styles/container.module.css";

const Sidebar = (props) => {
  return (
    <div
      className={
        props.isActive
          ? `${styles.sidebarDiv} ${styles.sidebarDivActive}`
          : `${styles.sidebarDiv}`
      }
    >
      <div
        className={
          props.isActive
            ? `${styles.sidebarLinks} ${styles.sidebarLinksActive}`
            : `${styles.sidebarLinks}`
        }
      >
        <Link href="/">
          <a href="" className={styles.sidebarLink}>
            Inicio
          </a>
        </Link>

        <Link href="/explore">
          <a href="" className={styles.sidebarLink}>
            Explorar
          </a>
        </Link>

        <Link href="/fight">
          <a href="" className={styles.sidebarLink}>
            Fight!
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
