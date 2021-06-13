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

