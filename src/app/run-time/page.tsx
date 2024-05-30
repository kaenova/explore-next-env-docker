import { env } from "@/env";
import styles from "./index.module.css";

// We need to use force dynamic to force using the environment variable from running environment of the server
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.pinkSpan}>Run Time</span> Environment Variable
        </h1>
        <div className={styles.cardRow}>
          <div
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{env.SAMPLE_ENV}</h3>
            <div className={styles.cardText}>
              It&apos;s your run time environment variable. Run time environment variable means it&apos;s dynamic page and it&apos;s changeable. This variable is looked up wehen server starting up.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
