function bcc() {
    //  const color = document.getElementById('color');
    const backgroundColor = document.getElementById('color')

    color.innerHTML = "RGB Color: " + backgroundColor;


    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const color = 'rgb(' + x + ',' + y + ',' + z + ')';

    // document.body.style.background = color;
}

//color();