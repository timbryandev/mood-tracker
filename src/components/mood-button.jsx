const MoodButton = ({ chosenIdx, idx, onClick, mood }) => (
  <button
    onClick={() => onClick(idx)}
    className={`mood-form__button ${
      chosenIdx === idx ? "mood-form__button--chosen" : ""
    }`}
    type="button"
    value={idx}
  >
    {mood}
  </button>
);

export default MoodButton;
