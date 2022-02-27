import { useEffect, useRef } from "react";

export default function ImageView({ src, width, height }) {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = src;

    image.addEventListener("load", () => {
      ctx.drawImage(image, 0, 0, width, height);
    });
  }, []);

  return <canvas ref={canvasRef} width={width} height={800} />;
}
