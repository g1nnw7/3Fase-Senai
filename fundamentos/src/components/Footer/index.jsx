import styles from './Footer.module.css'

const Footer = ({autor})=>{
    return(
        <>
        <footer className={styles.footer}>
            <p className={styles.autor}>{autor}</p>
        </footer>
        </>
    )
}

export default Footer