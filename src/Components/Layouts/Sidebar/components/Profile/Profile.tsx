import { useEffect, useState } from "react";
import styles from "./Profile.module.css";

function Profile() {
  const title = "aminkazemideveloper@gmail.com";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (index < title.length) {
        setText(title.slice(0, index + 1));
        index++;

        timeout = setTimeout(typeWriter, 100);
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.profile}>
      <span className={styles.title}>امین کاظمی</span>
      <span className={styles.mail}>{text}</span>
    </div>
  );
}

export default Profile;
