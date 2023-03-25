import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.content}>
                <span style={{ color: 'red' }}>❤</span> Miraz
            </p>
        </div>
    );
}
