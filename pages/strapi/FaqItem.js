import { useState } from "react";
import styles from "../../styles/Home.module.css";

export const FaqItem = ({ faqs, onAnswer }) => {
  const [answer, setAnswer] = useState();
  const handleClick = (faq) => {
    onAnswer(faq.answer);
  };

  return (
    <div className={styles.faqItem}>
      <div
        body
        className={styles.faqItem_body}
        onClick={() => handleClick(faqs)}
      >
        {faqs.question}
      </div>
    </div>
  );
};
