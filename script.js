// script.js
document.addEventListener('DOMContentLoaded', function() {
    const powerDial = document.getElementById('powerDial');
    const channelDial = document.getElementById('channelDial');
    const tvScreen = document.getElementById('tvScreen');
    const content = document.getElementById('content');
    let isOn = false;
    let channelIndex = 0;

    const channels = [
        {
            content: '<h1>Welcome to Hack Club TV</h1><p>Press the power button to start!</p>',
            backgroundColor: '#000'
        },
        {
            content: '<h1>Channel 1</h1><p>Classic Movies Marathon!</p>',
            backgroundColor: '#2a5298'
        },
        {
            content: '<h1>Channel 2</h1><p>Retro Music Hits!</p>',
            backgroundColor: '#e91e63'
        },
        {
            content: '<h1>Channel 3</h1><p>Old School Cartoons!</p>',
            backgroundColor: '#4caf50'
        }
    ];

    powerDial.addEventListener('click', function() {
        isOn = !isOn;
        if (isOn) {
            tvScreen.classList.remove('off');
            tvScreen.classList.add('on');
            changeChannel();
        } else {
            tvScreen.classList.remove('on');
            tvScreen.classList.add('off');
            tvScreen.style.backgroundColor = '#000';
        }
    });

    channelDial.addEventListener('click', function() {
        if (isOn) {
            changeChannel();
        }
    });

    function changeChannel() {
        channelIndex = (channelIndex + 1) % channels.length;
        const channel = channels[channelIndex];
        content.innerHTML = channel.content;
        tvScreen.style.backgroundColor = channel.backgroundColor;
    }
});