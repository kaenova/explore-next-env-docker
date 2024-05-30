import { env } from "@/env";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.pinkSpan}>Build Time</span> Environment Variable
        </h1>
        <div className={styles.cardRow}>
          <div
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{env.SAMPLE_ENV}</h3>
            <div className={styles.cardText}>
              It&apos;s your build time environment variable. Build time environment variable means it&apos;s static page and it&apos;s not changeable. This variable is injected during the build time.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
