import styles from './Header.module.scss';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div>
      <h1 className={styles["color-style"]}>ЛООП Защита</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default Header;