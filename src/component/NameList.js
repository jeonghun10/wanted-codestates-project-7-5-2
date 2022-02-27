import { useEffect, useRef } from "react";

export default function NameList({ data, userSelect, setUserSelect }) {
  const removeHandler = () => {
    setUserSelect(userSelect.filter((el) => el !== data));
  };
  return (
    <li>
      {data.name}
      <span onClick={removeHandler} style={{ cursor: "pointer" }}>
        {" "}
        X{" "}
      </span>
    </li>
  );
}
