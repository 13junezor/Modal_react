import styles from './modal.module.css'
import { useEffect } from 'react';
const ModalInner = ({children, onClose}) => {
    const escapehandler = (e) => {
        if (e.code === "Escape") {
            onClose()
        }
            }
useEffect(()=> {
        window.document.addEventListener('keydown', escapehandler) 
return () => {
    window.document.removeEventListener('keydown', escapehandler)
}}, [])

    return (
        <div className={styles.wrapper}>
        <div className={styles.inner}>
           {children} 
        </div>
        
    </div>
    )
}
export default ModalInner