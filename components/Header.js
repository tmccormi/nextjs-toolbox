import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <img src="/Complete Care logo_Horizontal-1024px.jpg" alt="Logo" className={styles.logo} />
      <h1 className="title">{title}</h1>
      <h2>An Affordable, Nationwide Health Care Plan</h2>
    </>
  );
}
