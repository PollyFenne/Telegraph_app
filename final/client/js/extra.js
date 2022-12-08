const raining = () => {
    const rain = document.querySelector(".rain");
    for (let i = 0; i < 250; i++) {
      const rainDrop = document.createElement("span");
      const aNumber = randomNumber(100);
      const timeDelay = randomNumber(10);
      const animDuration = randomNumber(5) + Math.random() + 0.2;
      rainDrop.style.left = `${aNumber}%`;
      rainDrop.style.animationDelay = `${timeDelay}s`;
      rainDrop.style.animationDuration = `${animDuration}s`;
      rain.appendChild(rainDrop);
    }
  };
  
  const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };
  
  raining();
  