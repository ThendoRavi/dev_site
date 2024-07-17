import { Fragment, useState } from "react";
import { MouseEvent } from "react";

// {items: [], heading: string}

import PropTypes from "prop-types";

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
};

function ListGroup(props) {
  const items = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr",
    "Kylian Mbappe",
    "Mohamed Salah",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const message = items.length === 0 && <p>No items to display</p>;
  //const handleClick = (event: MouseEvent) => console.log(event);
  const getMessage = () => {
    if (items.length === 0) {
      return <p>No items to display</p>;
    }
    return null;
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //onClick={() => console.log(item, "clicked")}
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
