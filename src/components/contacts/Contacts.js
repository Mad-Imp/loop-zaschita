import styles from "./Contacts.module.scss";
import logo from "../../assets/logo.png";
import Button from "../button/Button";

function Contacts() {
 return (
     <>
         <div className={styles.wrapper}>
             <div className={styles.contacts}>
                 <img src={logo} alt="лого" className={styles.logo}/>
                 <p>
                     <a className={styles.phone}href="tel:+74742476245">+7(4742) 47-62-45</a>
                 </p>
                 <Button/>
             </div>
         </div>
     </>
 )
}

export default Contacts;