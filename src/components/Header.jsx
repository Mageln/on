import logoIcon from "../assets/logo.svg"
import styles from "/src/style/components/Header.module.scss"




export const Header = () => {
  return (
    <header className={styles.container}>
        <img src={logoIcon} alt="OnyxCRM" />
    </header>
  )
}
