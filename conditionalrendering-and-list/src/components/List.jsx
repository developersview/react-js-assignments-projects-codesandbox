import "./List.css";

const List = ({ layout, items }) => {
  let style = "circle";
  let heading = "";
  switch (layout) {
    case "numbered":
      style = "number";
      heading = "Number List";
      break;
    case "alpha":
      style = "upper-alpha";
      heading = "Alpha List";
      break;
    default:
      style = null;
      heading = "Bullet List";
      break;
  }
  return (
    <>
      <div className="container">
        <h3 id="heading">{heading}</h3>
        <hr />
        <ul style={{ listStyleType: style }}>
          {items.map((item, index) => {
            return <li className="list-item">{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
