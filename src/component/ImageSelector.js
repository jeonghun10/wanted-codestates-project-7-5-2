import { useEffect, useRef, useState } from "react";

export default function ImageSelector({
  width,
  height,
  userSelect,
  setUserSelect,
}) {
  const canvasRef = useRef();
  let canvas;
  let context;
  let drag = false;
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  let stX;
  let stY;

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    canvas.addEventListener(
      "mousedown",
      function (me) {
        mDown(me);
      },
      false
    );
    canvas.addEventListener(
      "mousemove",
      function (me) {
        mMove(me);
      },
      false
    );
    canvas.addEventListener(
      "mouseup",
      function (me) {
        mUp(me);
      },
      false
    );
  }, []);

  function mDown(e) {
    startX = e.offsetX;
    startY = e.offsetY;
    drag = true;
  }
  function mUp(e) {
    endX = e.offsetX;
    endY = e.offsetY;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    let name = prompt("입력해 주세요");
    if (name === null) {
      drag = false;
      return;
    }
    drag = false;
    let obj = {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      name: name,
    };
    setUserSelect((el) => [...el, obj]);
  }
  function mMove(e) {
    if (!drag) return;
    let nowX = e.offsetX;
    let nowY = e.offsetY;
    canvasDraw(nowX, nowY);
    stX = nowX;
    stY = nowY;
  }
  function canvasDraw(currentX, currentY) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "rgba(256, 0, 0, 0.8)";
    context.fillStyle = "rgba(256, 0, 0, 0.2)";
    context.strokeRect(startX, startY, currentX - startX, currentY - startY);
    context.fillRect(startX, startY, currentX - startX, currentY - startY);
  }
  return (
    <>
      <canvas
        style={{ position: "absolute", left: "0", zIndex: "5" }}
        ref={canvasRef}
        width={width}
        height={height}
      />
    </>
  );
}
