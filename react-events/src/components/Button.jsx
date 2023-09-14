import "./Button.css";

const Button = () => {
  const handleClick = (e) => {
    switch (e.detail) {
      case 1: {
        console.log("Single click");
        break;
      }
      case 2: {
        alert("Double Click!!");
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <div className="Button">
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};

export default Button;
