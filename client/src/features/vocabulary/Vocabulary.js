import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {
  addPhraseAsync,
  deletePhraseAsync,
  updatePhrasesAsync,
  updatePhraseAsync,
  selectPhrases,
} from "./vocabularySlice";
import { defaultVideoLink } from '../../config'
/* import styles from "./Vocabulary.module.css"; */

export const Vocabulary = () => {
  const vidRef = useRef(null);
  const [plaing, setPlaing] = useState(false)
  const [showForm, toggleForm] = useState(false)
  const [search, updateSearch] = useState('')
  
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
    <div className="container">
      <video ref={vidRef} src={defaultVideoLink} width="0" height="0" />

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
          let action = showForm === "add" ? addPhraseAsync : updatePhraseAsync
          dispatch(action({_id: showForm, phrase, link, start, end, tags, description }))
          toggleForm(false)
        }}
      >
        <input className="form-control mb-3" ref={phraseRef} type="text" placeholder="ente phrase text" />
        <input className="form-control mb-3" ref={linkRef} type="text" placeholder="enter link to mp4 video file" defaultValue={defaultVideoLink}/>
        <input className="form-control mb-3" ref={startRef} type="text" placeholder="enter start of phrase in milliseconds" />
        <input className="form-control mb-3" ref={endRef} type="text" placeholder="enter end of phrase in milliseconds" />
        <input className="form-control mb-3" ref={tagsRef} type="text" placeholder="enter tags separated by space" />
        <input className="form-control mb-3" ref={descriptionRef} type="text" placeholder="enter description" />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mr-1" type="submit">Save</button>
          <button className="btn btn-secondary" onClick={() => { toggleForm(false) }}>Cancel</button>
        </div>
      </form> :
      <div>
        <div className="form-row ">
          <div className="flex-grow-1">
            <input
              className="form-control" 
              type="text" 
              placeholder="enter part of phrase" 
              value={search} 
              onChange={(e) => {
                updateSearch(e.target.value)
            }} />
          </div>
          <div className="btn-group ml-3">
            <button className="btn btn-secondary" onClick={() => { updateSearch('') }}>Clear Search</button>
            <button className="btn btn-secondary" onClick={() => { toggleForm("add") }}>Add Phrase</button>
          </div>
        </div>
        
        <ul className="list-group mt-3">
          {phrases.map(({ _id, phrase, link, start, end, tags, description }) => (
            <li 
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              key={phrase} 
              title={tags.join(' ')} 
              onClick={(e) => {
                let vid = vidRef.current;

                if (plaing) {
                  clearTimeout(plaing)
                }

                if ( vid.src !== link ) {
                  vid.src = link
                  vid.load()
                } 

                vid.currentTime = start / 1000
                vid.play().then(() => {
                  setPlaing(_.delay(() => {
                    vid.pause()
                    setPlaing(false)
                  }, end - start))
                }).catch(e => {
                  console.log('play video error =======', e)
                  vid.load()
                  vid.pause()
                })
              }}
            >
              {phrase}
              <div className="btn-group">
                <button
                  className="btn btn-secondary" 
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleForm(_id)
                    _.delay(() => {
                      phraseRef.current.value = phrase
                      linkRef.current.value = link
                      startRef.current.value = start
                      endRef.current.value = end
                      descriptionRef.current.value = description
                      tagsRef.current.value = tags.join(' ')
                    }, 10)
                  }}
                >edit</button>
                <button
                  className="btn btn-danger"  
                  onClick={(e) => {
                    e.stopPropagation()
                    if (window.confirm('Are you sure?')) {
                      dispatch(deletePhraseAsync(_id))
                    }
                  }}
                >delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>} 
    </div>
  );
};