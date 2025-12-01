const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('display');
const msg = document.getElementById('msg');
let total = 0, interval=null, running=false;

function format(s){ const m = Math.floor(s/60).toString().padStart(2,'0'); const sec = (s%60).toString().padStart(2,'0'); return `${m}:${sec}` }

startBtn.addEventListener('click', () => {
  if(!running){
    const mins = parseInt(document.getElementById('minutes').value || 0,10);
    const secs = parseInt(document.getElementById('seconds').value || 0,10);
    if(total === 0){
      total = mins*60 + secs;
      if(total <= 0){ msg.textContent = 'Set a time > 0'; return; }
    }
    running = true;
    msg.textContent = '';
    interval = setInterval(() => {
      total--;
      display.textContent = format(total);
      if(total <= 0){
        clearInterval(interval);
        running = false;
        msg.textContent = "Time's up!";
        total = 0;
      }
    }, 1000);
  }
});

pauseBtn.addEventListener('click', () => {
  if(running){ clearInterval(interval); running = false; msg.textContent = 'Paused'; }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval); running=false; total=0; display.textContent='00:00'; msg.textContent='Reset';
});
display.textContent='00:00';
