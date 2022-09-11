import { useState } from "react";
import { Post } from "../types/Post";
import nextId from "react-id-generator";
import validator from "validator";
import save from "../images/logo-save.png"
import reset from "../images/logo-reset.png"

type Props = {
  posts: Post[];
  onCreatePost: (posts: Post[]) => void;
};
export const InputForm: React.FC<Props> = ({ posts, onCreatePost }) => {
  const [nameAuthor, setNameAuthor] = useState("");
  const [nameAuthorError, setNameAuthorError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [imageUrlError, setImageUrlError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");

  const handleInputNameAuthor: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNameAuthorError(false);
    setNameAuthor(event.target.value);
  };

  const handleInputImageUrl: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setImageUrl(event.target.value);
  };

  const handleInputText: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContentError(false);
    setText(event.target.value);
  };
  const handleAvatar = () => {
    setImageUrl(
      "https://gravatar.com/avatar/51b23737bf3e0ddcce5c4f914f2924af?s=400&d=robohash&r=x"
    );
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (nameAuthor.trim().length === 0) {
      setNameAuthorError(true);
      return;
    }
    if (text.trim().length === 0) {
      setContentError(true);
      return;
    }
    if (validator.isURL(imageUrl)) {
      setImageUrlError(false);
    } else {
      setImageUrlError(true);
      return;
    }

    onCreatePost([
      {
        nameAuthor,
        imageUrl,
        text,
        id: Number(nextId().slice(2)),
      },
      ...posts,
    ]);
    handleResetForm();
  };

  const handleResetForm = () => {
    setImageUrl("");
    setNameAuthor("");
    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-input">
        <div>
          <input
            className="text-field"
            placeholder="Ваше имя:"
            type="text"
            value={nameAuthor}
            onChange={handleInputNameAuthor}
          />
          {nameAuthorError && <p className="error-message">Введите имя!</p>}
        </div>
        <div>
          <input
            className="text-field"
            type="text"
            placeholder="Введите ссылку на свою аватарку"
            value={imageUrl}
            onChange={handleInputImageUrl}
          />
          {imageUrlError && (
            <>
              <p className="error-message">
                Введенная ссылка на аватар не валидная
              </p>
              <div>
                <button className="button" onClick={handleAvatar}>
                  Заполнить аватаром по умолчанию
                </button>
              </div>
            </>
          )}
        </div>
        <div>
          <textarea
            className="text-field"
            placeholder="Текст поиска"
            value={text}
            onChange={handleInputText}
            cols={30}
            rows={10}
          ></textarea>
          {contentError && (
            <p className="error-message">
              Ваш пост будет лучше смотреться с текстом
            </p>
          )}
        </div>
        <button className="button" type="submit">
          <img className="inner-logo" src={save} alt="save-logo" />
          Добавить
        </button>
        <button className="button-reset" type="reset" onClick={handleResetForm}>
          <img className="inner-logo" src={reset} alt="reset-logo"  />
        </button>
        <p>Объявлений: {posts.length} </p>
      </form>
    </>
  );
};
