import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";

import styles from "./SocialPost.module.css";

export default function SocialPost({ post }) {
  const messageLines = post.message.split('\n');
  return (
    <section className={styles.container}>
      <div className={styles.profileContainer}>
        <p style={{padding: "10px"}}>{post.personName}</p>
        <div className={styles.iconContainer}>
          <PersonIcon />
        </div>
      </div>
      <div className={styles.postContainer}>
      {messageLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <hr />
        <div className={styles.attachContainer}>
          {post.attachments.map((attach, index) => (
            <img
              key={`post_attach_${index}`}
              src={URL.createObjectURL(attach)}
              alt="post attachment"
            />
          ))}
        </div>
      </div>
    </section>
    
  );
}
