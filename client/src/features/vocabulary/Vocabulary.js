import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {
  addPhraseAsync,
  updatePhrasesAsync,
  selectPhrases,
} from "./vocabularySlice";
import { defaultVideoLink } from '../../config'
/* import styles from "./Vocabulary.module.css"; */

export const Vocabulary = () => {
  const vidRef = useRef(null);
  const [plaing, setPlaing] = useState(false)
  
  const vidSrcRef = useRef(null);
  const phraseRef = useRef(null);
  const linkRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const tagsRef = useRef(null);
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
          ref={vidSrcRef}
          src={defaultVideoLink}
          type="video/mp4"
        />
      </video>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const { value: phrase } = phraseRef.current
          const { value: link } = linkRef.current
          const { value: start } = startRef.current
          const { value: end } = endRef.current
          const { value: description } = descriptionRef.current
          const { value: tags } = tagsRef.current
          dispatch(addPhraseAsync({ phrase, link, start, end, tags, description }))
        }}
      >
        <input ref={phraseRef} type="text" placeholder="phrase" />
        <input ref={linkRef} type="text" placeholder="link" defaultValue={defaultVideoLink}/>
        <input ref={startRef} type="text" placeholder="start" />
        <input ref={endRef} type="text" placeholder="end" />
        <input ref={tagsRef} type="text" placeholder="tags separated by space" />
        <input ref={descriptionRef} type="text" placeholder="description" />
        <input type="submit" />
      </form>
      <ul>
        {phrases.map(({ phrase, link, start, end, tags, description }) => (
          <li key={phrase} title={tags.join(' ')} >
            <div
              onClick={(e) => {
                let vid = vidRef.current;
                let vidSrc = vidSrcRef.current;

                if (plaing) {
                  clearTimeout(plaing)
                }

                if ( vidSrc.src !== link ) {
                  vidSrc.src = link
                  vid.load()
                } 

                vid.currentTime = start / 1000
                vid.play().then(() => {
                  setPlaing(_.delay(() => {
                    vid.pause() 
                    setPlaing(false)
                  }, end - start))
                })
              }}
            >
              {phrase}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};