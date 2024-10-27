import styles from "./alert.module.css";
import { motion } from "framer-motion";

const Alert = ({ type, text }) => {
  return (
    <motion.div
      initial={{ x: +30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={styles.alertContainer}
    >
      <div
        className={`${styles.alert} ${
          type === "danger" ? styles.alertDanger : styles.alertSuccess
        }`}
        role="alert"
      >
        <p
          className={`${styles.alertIcon} ${
            type === "danger" ? styles.iconDanger : styles.iconSuccess
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className={styles.alertText}>{text}</p>
      </div>
    </motion.div>
  );
};

export default Alert;
