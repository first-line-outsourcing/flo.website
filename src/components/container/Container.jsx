import styles from './container.module.css';

export const Container = (props) => (
  <div className={styles.root}>{props.children}</div>
)
