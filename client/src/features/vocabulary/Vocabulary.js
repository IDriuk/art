import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePhrasesAsync, selectPhrases } from "./vocabularySlice";
import styles from "./Vocabulary.module.css";

export const Vocabulary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const phrases = useSelector(selectPhrases);

  return (
    <ul>
      <li>phrase 1</li>
      <li>phrase 2</li>
      <li>phrase 3</li>
    </ul>
  );
};
