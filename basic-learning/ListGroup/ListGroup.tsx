import { useState } from "react";

interface ListGroupProps {
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectItem }: ListGroupProps) {
  const [selecetedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>No item found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
      <ul className="list-group" style={{ backgroundColor: "yellow" }}>
        {item.map((item, index) => (
          <li
            className={
              selecetedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
