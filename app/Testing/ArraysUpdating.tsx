import { useState } from "react";

const ArraysUpdating = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    setTags([...tags, "exciting"]);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Updating
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ArraysUpdating;
