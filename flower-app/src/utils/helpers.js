export const getRandomColor = () => {
    const colors = ["#FF69B4", "#FF4500", "#FFD700", "#8A2BE2", "#32CD32"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  