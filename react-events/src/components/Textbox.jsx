import "./Textbox.css";

const Textbox = () => {
  const handleFocus = () => {
    console.log("focused on the textbox");
  };

  const handleBlur = () => {
    console.log("out of textbox");
  };

  const handleCopy = () => {
    alert("Text has been copied");
  };

  const handleCut = () => {
    alert("Text has been cut");
  };

  const handlePaste = () => {
    alert("Text has been pasted");
  };

  return (
    <>
      <div className="textbox">
        <h3>Give your Feedback</h3>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCopy={handleCopy}
          onCut={handleCut}
          onPaste={handlePaste}
        />
      </div>
    </>
  );
};

export default Textbox;
