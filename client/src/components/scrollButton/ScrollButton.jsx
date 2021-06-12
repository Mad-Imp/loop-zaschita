import styles from './ScrollButton.module.scss';
import {useState} from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className={styles.button}
                onClick={() => scrollToTop()}
                style={{display: visible ? 'inline' : 'none'}}>
            <ExpandLessIcon fontSize="large"
                            className={styles.upIcon}
            />
        </button>
    )
}