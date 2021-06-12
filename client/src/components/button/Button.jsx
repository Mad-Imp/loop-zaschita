import styles from "./Button.module.scss";

function Button(props) {
    return (
        <button className={styles.btn}>{props.content}</button>
    )
}

export default Button;