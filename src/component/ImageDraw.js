import { useEffect, useRef } from "react";

export default function ImageDraw({ data, width, height }) {
  const canvasRef = useRef();
  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "rgba(0,256,256,0.3)";
    context.strokeStyle = "rbba(0, 256, 256, 1)";
    context.strokeRect(
      data.startX,
      data.startY,
      data.endX - data.startX,
      data.endY - data.startY
    );
    context.fillRect(
      data.startX,
      data.startY,
      data.endX - data.startX,
      data.endY - data.startY
    );
    context.font = "20px serif";
    context.fillStyle = "black";
    context.fillText(data.name, data.startX, data.startY);
  });

  return (
    <>
      <canvas
        style={{ position: "absolute", left: "0" }}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </>
  );
}
