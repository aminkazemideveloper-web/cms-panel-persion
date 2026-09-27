import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Card from "../../../../shared/Card/Card";

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
    <Card className={styles.profile}>
      <span className={styles.title}>امین کاظمی</span>
      <span className={styles.mail}>{text}</span>
    </Card>
  );
}

export default Profile;
