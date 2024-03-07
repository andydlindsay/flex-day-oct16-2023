import useMousePosition from "../hooks/useMousePosition";

const MousePosition = () => {
  const coords = useMousePosition();

  const style = {
    fontSize: `${coords.y / 5}px`
  };

  return (
    <div>
      <h2 style={style}>X: {coords.x}, Y: {coords.y}</h2>
    </div>
  );
};

export default MousePosition;
