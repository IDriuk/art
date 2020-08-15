import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {
  addPhraseAsync,
  deletePhraseAsync,
  updatePhrasesAsync,
  selectPhrases,
} from "./vocabularySlice";
import { defaultVideoLink } from '../../config'
/* import styles from "./Vocabulary.module.css"; */

export const Vocabulary = () => {
  const vidRef = useRef(null);
  const [plaing, setPlaing] = useState(false)
  const [showForm, toggleForm] = useState(false)
  const [search, updateSearch] = useState('')
  
  const vidSrcRef = useRef(null);
  const phraseRef = useRef(null);
  const linkRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const tagsRef = useRef(null);
  const descriptionRef = useRef(null);

  const dispatch = useDispatch();
  const phrases = useSelector(selectPhrases)
    .filter(el => RegExp(search.toLowerCase()).test(el.phrase.toLowerCase()));

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

      {showForm ? 
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
          toggleForm(false)
        }}
      >
        <input ref={phraseRef} type="text" placeholder="phrase" />
        <input ref={linkRef} type="text" placeholder="link" defaultValue={defaultVideoLink}/>
        <input ref={startRef} type="text" placeholder="start" />
        <input ref={endRef} type="text" placeholder="end" />
        <input ref={tagsRef} type="text" placeholder="tags separated by space" />
        <input ref={descriptionRef} type="text" placeholder="description" />
        <button type="submit">Save</button>
        <button onClick={() => { toggleForm(false) }}>Cancel</button>
      </form> :
      <div>
        <input 
          type="text" 
          placeholder="enter part of phrase" 
          value={search} 
          onChange={(e) => {
            updateSearch(e.target.value)
        }} />
        <button onClick={() => { updateSearch('') }}>Clear Search</button>
        <button onClick={() => { toggleForm(true) }}>Add Phrase</button>
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
                <div>{phrase}</div>
                <button onClick={(e) => {
                  e.stopPropagation()
                  toggleForm(true)
                  _.delay(() => {
                    phraseRef.current.value = phrase
                    linkRef.current.value = link
                    startRef.current.value = start
                    endRef.current.value = end
                    descriptionRef.current.value = description
                    tagsRef.current.value = tags.join(' ')
                  }, 10)
                }}>edit</button>
                <button onClick={(e) => {
                  e.stopPropagation()
                  if (window.confirm('Are you sure?')) {
                    dispatch(deletePhraseAsync(phrase))
                  }
                }}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>} 
    </div>
  );
};