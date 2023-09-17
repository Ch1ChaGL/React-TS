import React, { FC, useRef, useState } from "react";

const EventExapmle: FC = () => {
  const [value, setValue] = useState("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drags");
  };

  const dragWithPreventHandler = (e: React.DragEvent) => {
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drop");
  };
  return (
    <div>
      <input type="text" onChange={changeHandler} placeholder="Управляемый"/>
      <input ref={inputRef} placeholder="Неуправляемый"/>
      <button onClick={clickHandler}> Кнопка </button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: "200px", height: "200px", background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "red" : 'yellow',
          marginTop: 10,
        }}
      ></div>
    </div>
  );
};

export default EventExapmle;
