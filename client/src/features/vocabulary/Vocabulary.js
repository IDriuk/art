import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhraseAsync, updatePhrasesAsync, selectPhrases } from "./vocabularySlice";
/* import styles from "./Vocabulary.module.css"; */

export const Vocabulary = () => {
  const phraseRef = useRef(null)
  const linkRef = useRef(null)
  const descriptionRef = useRef(null)

  const dispatch = useDispatch()
  const phrases = useSelector(selectPhrases)

  useEffect(() => {
    dispatch(updatePhrasesAsync())
  }, [dispatch])

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { value: phrase } = phraseRef.current;
          const { value: link } = linkRef.current;
          const { value: description } = descriptionRef.current;
          dispatch(addPhraseAsync({ phrase, link, description }));
        }}
      >
        <input
          ref={phraseRef}
          type="text"
          placeholder="phrase"
        />
        <input
          ref={linkRef}
          type="text"
          placeholder="link"
        />
        <input
          ref={descriptionRef}
          type="text"
          placeholder="description"
        />
        <input type="submit" />
      </form>
      <ul>
        {phrases.map( ({ phrase, link, description}) => <li key={phrase}>
          <div><a href={link} title={description}>{phrase}</a></div>
        </li> )}
      </ul>
    </div>
  );
};
