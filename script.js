document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('startBtn').classList.add('hidden');
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('doneBtn').addEventListener('click', () => {
    const numBulbs = document.getElementById('numBulbs').value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = ''; 

    for (let i = 0; i < numBulbs; i++) {
        const bulb = document.createElement('div');
        bulb.classList.add('bulb');

        const img = document.createElement('img');
        img.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'; 
        img.alt = 'Light Bulb';

        const button = document.createElement('button');
        button.textContent = 'Turn On';
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        const progress = document.createElement('progress');
        progress.max = 10;
        progress.value = 10;
        progress.style.display = 'none'; 

        button.addEventListener('click', () => {
            if (img.src.includes('2102')) { 
                img.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png'; 
                button.textContent = 'Turn Off';
                button.style.backgroundColor = 'green';
                progress.style.display = 'inline-block'; 
                let remainingTime = 10; 
                progress.value = remainingTime;

                const timer = setInterval(() => {
                    remainingTime--;
                    progress.value = remainingTime;
                    if (remainingTime <= 0) {
                        clearInterval(timer);
                        img.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
                        button.textContent = 'Turn On';
                        button.style.backgroundColor = 'red';
                        progress.style.display = 'none'; 
                    }
                }, 1000); 
            } else { 
                img.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
                button.textContent = 'Turn On';
                button.style.backgroundColor = 'red'; 
                progress.style.display = 'none'; 
            }
        });

        bulb.appendChild(img);
        bulb.appendChild(button);
        bulb.appendChild(progress); 
        bulbContainer.appendChild(bulb);
    }
    document.getElementById('modal').classList.add('hidden');
    bulbContainer.classList.remove('hidden');
    document.getElementById('resetBtn').classList.remove('hidden');
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('bulbContainer').classList.add('hidden');
    document.getElementById('resetBtn').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('startBtn').classList.remove('hidden');
    document.getElementById('bulbContainer').innerHTML = '';
});
