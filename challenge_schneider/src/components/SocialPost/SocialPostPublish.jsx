import React from "react";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import styles from "./SocialPostPublish.module.css";
import { useState } from "react";

export default function SocialPostPublish({ user, postPublished }) {
  const [userText, setUserText] = useState("");
  const [userAttach, setUserAttach] = useState([]);

  function handleUserText(event) {
    setUserText(event.target.value);
  }

  function handleUserAttach(event) {
    setUserAttach([event.target.files[0]]);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    const post = {
      personName: user,
      attachments: userAttach,
      message: userText,
    };
    const postText = document.getElementById("postText");
    const inputFile = document.getElementById("inputFile");
    postPublished(post);
    postText.value = "";
    inputFile.value = "";
  }

  return (
    <section className={styles.container}>
      <div className={styles.profileContainer}>
        <p>{user}</p>
        <div className={styles.iconContainer}>
          <PersonIcon />
        </div>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.userMessageContainer}>
          <textarea
            rows="3"
            cols="83"
            placeholder="Escreva Algo"
            id="postText"
            onChange={handleUserText}
          />
        </div>
        <div className={styles.buttonContainer}>
          <label htmlFor="inputFile" className={styles.fileLabel}>
            <input
              type="file"
              id="inputFile"
              className={styles.fileInput}
              onChange={handleUserAttach}
              accept="image/*"
            />
            Anexar imagem
            
          </label>
          <div className={styles.attachmentMessage}>
              {userAttach.length > 0 && <p>Arquivo anexado</p>}
            </div>
          <button className={styles.publishButton} onClick={handleButtonClick}>
            Publicar
          </button>
        </div>
      </div>
    </section>
  );
}
