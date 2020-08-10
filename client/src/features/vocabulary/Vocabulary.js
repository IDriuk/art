import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {
  addPhraseAsync,
  updatePhrasesAsync,
  selectPhrases,
} from "./vocabularySlice";
/* import styles from "./Vocabulary.module.css"; */

export const Vocabulary = () => {
  const vidRef = useRef(null);
  const [plaing, setPlaing] = useState(false)

  const phraseRef = useRef(null);
  const linkRef = useRef(null);
  const descriptionRef = useRef(null);

  const dispatch = useDispatch();
  const phrases = useSelector(selectPhrases);

  useEffect(() => {
    dispatch(updatePhrasesAsync());
  }, [dispatch]);

  return (
    <div>
      <video ref={vidRef} width="0" height="0" >
        <source
          src="https://drive.google.com/uc?export=download&amp;id=1QDvlHH6WjjkwU2oKSdvI4BZcrLwGF2S6"
          type="video/mp4"
        />
      </video>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const { value: phrase } = phraseRef.current
          const { value: link } = linkRef.current
          const { value: description } = descriptionRef.current
          dispatch(addPhraseAsync({ phrase, link, description }))
        }}
      >
        <input ref={phraseRef} type="text" placeholder="phrase" />
        <input ref={linkRef} type="text" placeholder="link" />
        <input ref={descriptionRef} type="text" placeholder="description" />
        <input type="submit" />
      </form>
      <ul>
        {phrases.map(({ phrase, link, description }) => (
          <li key={phrase}>
            <div
              onClick={(e) => {
                if (plaing) {
                  clearTimeout(plaing)
                }

                let vid = vidRef.current;
                vid.currentTime = 7 // start
                vid.play().then(() => {
                  setPlaing(_.delay(() => {
                    vid.pause() 
                    setPlaing(false)
                  }, 5000 /* (end - start) * 1000 */))
                })
              }}
            >
              <a title={description}>
                {phrase}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// vid.src = `https://drive.google.com/uc?export=download&id=1wOLAVi25cf89EheyyANt5lreoBTme7Iy#t=29.3,40`
// vid.load()
// vid.play()