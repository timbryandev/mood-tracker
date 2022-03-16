import React, { useState } from "react";
import MoodButton from "./mood-button";
import moods from "../config/moods";

// TODO: Initial date should be today
const INITIAL_STATE = { date: "", idx: null };

const Mood = ({ date, idx, onNewEntry }) => {
  const [state, setState] = useState(INITIAL_STATE);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    if (!state.date || state.index === null) {
      return;
    }
    // TODO: Add validation to prevent adding dates in the future
    onNewEntry(state);
    setState(INITIAL_STATE);
  }

  function setDate(evt) {
    setState((prev) => ({ ...prev, date: evt.target.value }));
  }

  function setMood(idx) {
    setState((prev) => ({ ...prev, idx }));
  }

  if (!date) {
    return (
      <form className="mood-form" onSubmit={handleFormSubmit}>
        <fieldset className="mood-form__fieldset">
          <div className="mood-form__row">
            <input onChange={setDate} type="date" value={state.date} />
          </div>
          <div className="mood-form__row">
            {moods.map((mood, idx) => (
              <MoodButton
                key={moods[idx]}
                chosenIdx={state.idx}
                idx={idx}
                onClick={setMood}
                mood={moods[idx]}
              />
            ))}
          </div>
          <div className="mood-form__row">
            <button
              className="mood-form__button mood-form__button--submit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
  return (
    <div>
      {date}: {moods[idx]}
    </div>
  );
};

export default Mood;
