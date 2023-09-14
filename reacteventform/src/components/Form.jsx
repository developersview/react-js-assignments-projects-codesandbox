import "./Form.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Form Submitted!");
    alert("Form submitted!");
  };

  return (
    <div className="simple-form">
      <h2>Type some text here</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
