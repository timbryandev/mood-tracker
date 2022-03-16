import Mood from "./components/mood";
import History from "./components/history";
import useLocalStorage from "./hooks/localStorage";
import "./styles.css";

export default function App() {
  const [moodHistory, storeMoodHistory] = useLocalStorage("mood", []);

  function handleNewEntry({ date, idx }) {
    storeMoodHistory((prev) => [{ date, idx }, ...moodHistory]);
  }

  return (
    <main className="App">
      <h1>Mood tracker</h1>
      <section>
        <h2>
          A simple mood tracker for experimenting with React in CodeSandbox
        </h2>
        <p>
          Stores your history in <code>window.localStorage</code> so only you
          can see it 😉
        </p>
      </section>
      <hr />
      <section>
        <h2>Add a new entry:</h2>
        <Mood onNewEntry={handleNewEntry} />
      </section>
      <hr />
      <section>
        <h2>Previous entries:</h2>
        <History entries={moodHistory} />
      </section>
    </main>
  );
}
