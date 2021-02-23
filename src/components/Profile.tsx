import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/58090106?s=460&u=754896f3a0fc658ad55cb0b821671e1b927cecc1&v=4"
        alt="Leandro facim"
      />
      <div>
        <strong>Leandro Facim</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
