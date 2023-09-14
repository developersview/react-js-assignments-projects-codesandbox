import "./Form2.css";

const Form2 = () => {
  function handlePress(e) {
    if (e.key === "Enter") {
      alert("You have pressed Enter");
    }
  }

  return (
    <div className="newForm">
      <h3>Enter text</h3>
      <hr />
      <input onKeyPress={handlePress} placeholder={"Enter something"} />
    </div>
  );
};

export default Form2;
