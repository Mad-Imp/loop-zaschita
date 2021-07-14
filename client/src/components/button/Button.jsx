import styles from "./Button.module.scss";

function Button(props) {
    return (
        <button className={styles.btn} onClick={props.onClick}>{props.content}</button>
    )
}

export default Button;