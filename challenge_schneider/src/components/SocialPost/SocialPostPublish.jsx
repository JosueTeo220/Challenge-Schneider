import React, { useState } from "react";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import styles from "./SocialPostPublish.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importe o CSS do React Toastify

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
    postPublished(post);
    setUserText(""); // Limpar o texto
    setUserAttach([]); // Limpar os anexos

    // Exibir o toast ao clicar no botão "Publicar"
    toast.success("Parabéns, você ganhou 10 pontos!");

    // Limpar o input de arquivo
    const inputFile = document.getElementById("inputFile");
    if (inputFile) {
      inputFile.value = "";
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.profileContainer}>
        <p style={{ padding: "15px" }}>{user}</p>
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
            value={userText}
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
      {/* Container para exibir os toasts */}
      <ToastContainer autoClose={3000} /> {/* Feche automaticamente após 3 segundos */}
    </section>
  );
}
