// Перемещение

let isMoving = false;
let moveInterval = null;
let positionX = 0; // Текущая позиция по оси X
let positionY = 0;
let moveRight = true;
let moveDown = true;

document.getElementById('translate-btn').addEventListener('click', function() {
    const redBlock = document.querySelector('.translate__red');
    const blueBlock = document.querySelector('.translate__blue');
    
    if (!isMoving) {
        isMoving = true;
        
        // Функция для перемещения блоков
        function moveBlocks() {
          if (moveRight) {
            positionX += 1;
          } else {
            positionX -= 1;
          }

          if (positionX > 100) {
            moveRight = false;
          } else if (positionX < -100) {
            moveRight = true;
          }

          // Применяем трансформацию к блоку
          redBlock.style.transform = `translateX(${positionX}px)`;

          if (moveDown) {
            positionY += 1;
          } else {
            positionY -= 1;
          }

          if (positionY > 100) {
            moveDown = false;
          } else if (positionY < -100) {
            moveDown = true;
          }

          blueBlock.style.transform = `translateY(${positionY}px)`;
        }

        // Вызываем функцию moveBlock каждые 50 миллисекунд (или какое вам удобно время)
        moveInterval = setInterval(moveBlocks, 10);
    } else {
        clearInterval(moveInterval);
        isMoving = false;
    }
});


// Вращение

let isRotating = false;
let rotationInterval = null;
// Устанавливаем начальный угол вращения
let rotationAngle = 0;

document.getElementById('rotate-btn').addEventListener('click', function() {
  // Получаем красный блок
  const redBlock = document.querySelector('.rotate__red');
  const bluedBlock = document.querySelector('.rotate__blue');

  if (!isRotating) {
    isRotating = true;
    
    // Функция для вращения блока
    function rotateBlocks() {
        // Увеличиваем угол вращения на 1 градус
        rotationAngle += 1;
        
        // Применяем трансформацию к блоку
        redBlock.style.transform = `rotate(${rotationAngle}deg)`;
        bluedBlock.style.transform = `rotateX(${rotationAngle}deg) rotateY(${rotationAngle}deg) rotateZ(${rotationAngle}deg)`;
    }

    // Вызываем функцию rotateRedBlock каждые 50 миллисекунд (или какое вам удобно время)
    rotationInterval = setInterval(rotateBlocks, 50);
  } else {
    clearInterval(rotationInterval);
    isRotating = false;
  }
});


// Масштабирование

let isScaling = false;
let scaleInterval = null;
let scale = 1;
let scaleIncrease = true

document.getElementById('scale-btn').addEventListener('click', function() {
  // Получаем красный блок
  const redBlock = document.querySelector('.scale__red');
  const bluedBlock = document.querySelector('.scale__blue');

  if (!isScaling) {
    isScaling = true;
    
    function scaleBlocks() {
      if (scaleIncrease) {
        scale += 0.01;
      } else {
        scale -= 0.01;
      }

      if (scale > 2) {
        scaleIncrease = false;
      } else if (scale < 0.1) {
        scaleIncrease = true;
      }
        
      // Применяем трансформацию к блоку
      redBlock.style.transform = `scale(${scale})`;
      bluedBlock.style.transform = `scaleX(${scale})`;
    }

    // Вызываем функцию rotateRedBlock каждые 50 миллисекунд (или какое вам удобно время)
    scaleInterval = setInterval(scaleBlocks, 50);
  } else {
    clearInterval(scaleInterval);
    isScaling = false;
  }
});


// Перекос 

let isSkewing = false;
let skewInterval = null;
let skew = 0;
let skewIncrease = true

document.getElementById('skew-btn').addEventListener('click', function() {
  const redBlock = document.querySelector('.skew__red');
  const bluedBlock = document.querySelector('.skew__blue');

  if (!isSkewing) {
    isSkewing = true;
    
    function skewBlocks() {
      if (skewIncrease) {
        skew += 1;
      } else {
        skew -= 1;
      }

      if (skew > 180) {
        skewIncrease = false;
      } else if (skew < -180) {
        skewIncrease = true;
      }
        
      // Применяем трансформацию к блоку
      redBlock.style.transform = `skewX(${skew}deg)`;
      bluedBlock.style.transform = `skewY(${skew}deg)`;
    }

    // Вызываем функцию rotateRedBlock каждые 50 миллисекунд (или какое вам удобно время)
    skewInterval = setInterval(skewBlocks, 50);
  } else {
    clearInterval(skewInterval);
    isSkewing = false;
  }
});