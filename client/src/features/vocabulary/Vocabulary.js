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
        <div className="form-row mr-0 ml-0">
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
            <button className="btn btn-secondary" onClick={() => { updateSearch('') }}>
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>  
            </button>
            <button className="btn btn-secondary" onClick={() => { toggleForm("add") }}>
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
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
                >
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
                <button
                  className="btn btn-danger"  
                  onClick={(e) => {
                    e.stopPropagation()
                    if (window.confirm('Are you sure?')) {
                      dispatch(deletePhraseAsync(_id))
                    }
                  }}
                >
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>} 
    </div>
  );
};