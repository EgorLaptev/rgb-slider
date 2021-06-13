'use strict';

const rRange = document.getElementById('r-range'),
      gRange = document.getElementById('g-range'),
      bRange = document.getElementById('b-range');

let colorBg     = document.getElementById('color-bg'),
    colorCode   = document.getElementById('color-code');

[rRange, gRange, bRange].forEach(range => {

    range.addEventListener('input', evt => {
        colorCode.textContent = `rgb(${rRange.value}, ${gRange.value}, ${bRange.value})`;
        colorBg.style.backgroundColor = colorCode.textContent;
    });

});

/* Copy color code */
let colorCodeText = document.createElement('input');

colorCode.addEventListener('click', ev => {

    colorCodeText.value = colorCode.textContent;
    colorCodeText.style.opacity = '0';
    colorCodeText.style.position = 'absolute';g
    document.body.appendChild(colorCodeText);

    colorCodeText.select();
    document.execCommand("copy");

});
