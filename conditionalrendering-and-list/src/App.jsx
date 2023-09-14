import List from "./components/List";
import "./styles.css";
import items from "./data/data";

export default function App() {
  return (
    <>
      <h2 className="title">Conditional Rendering & Lists</h2>
      <List layout="numbered" items={items} />
      <List layout="alpha" items={items} />
      <List layout="bullet" items={items} />
    </>
  );
}
