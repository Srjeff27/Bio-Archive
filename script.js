function processData() {
    const input = document.getElementById('inputData').value;
    const dnaOutput = document.getElementById('dnaOutput');
    const binaryDisplay = document.getElementById('binaryDisplay');
    const statusPlant = document.getElementById('statusPlant');
    const plantIcon = document.getElementById('plantIcon');
    
    if (!input) return;

    dnaOutput.innerHTML = '';
    statusPlant.innerText = "ENCODING DATA...";
    statusPlant.style.color = "var(--neon-blue)";
    
    let binaryString = '';
    for (let i = 0; i < input.length; i++) {
        let bin = input[i].charCodeAt(0).toString(2);
        binaryString += Array(8 - bin.length + 1).join("0") + bin;
    }
    binaryDisplay.innerText = binaryString;
    document.getElementById('bitRate').innerText = binaryString.length + " bits";

    let dnaSequence = [];
    for (let i = 0; i < binaryString.length; i += 2) {
        let chunk = binaryString.substr(i, 2);
        if (chunk === '00') dnaSequence.push('A');
        else if (chunk === '01') dnaSequence.push('C');
        else if (chunk === '10') dnaSequence.push('G');
        else if (chunk === '11') dnaSequence.push('T');
        else dnaSequence.push('A');
    }

    let i = 0;
    function typeWriter() {
        if (i < dnaSequence.length) {
            const base = dnaSequence[i];
            const span = document.createElement('span');
            span.innerText = base;
            span.className = `base-${base}`;
            dnaOutput.appendChild(span);
            
            dnaOutput.scrollTop = dnaOutput.scrollHeight;
            
            i++;
            setTimeout(typeWriter, 20);
        } else {
            finalizeProcess();
        }
    }
    typeWriter();
}

function finalizeProcess() {
    const statusPlant = document.getElementById('statusPlant');
    const plantIcon = document.getElementById('plantIcon');

    statusPlant.innerText = "UPLOADING TO GENOME...";
    
    setTimeout(() => {
        statusPlant.innerHTML = "DATA SECURED IN SEED (T1)<br><span style='font-size:0.7rem; color:#888'>REF: [CITE-27]</span>";
        statusPlant.style.color = "var(--neon-green)";
        
        plantIcon.style.transform = "scale(1.3)";
        setTimeout(() => plantIcon.style.transform = "scale(1)", 300);
    }, 1000);
}

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ACGT01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(5, 10, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Fira Code';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
