const sound = ['applause','boo','gasp','tada','victory','wrong']

sound.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound
    btn.addEventListener('click',()=>{
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);

})
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        document.getElementById(sound).pause();
        song.currentTime = 0;
    })
}

