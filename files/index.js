function toggleDescription() {
    const jeedescription = document.getElementById('description');
    const infoBox = document.querySelector('.info-box');

    if (jeedescription.style.display === 'none' || jeedescription.style.display === '') {
        jeedescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        jeedescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function neettoggleDescription() {
    const neetdescription = document.getElementById('neetdescription');
    const infoBox = document.querySelector('.info-box');

    if (neetdescription.style.display === 'none' || neetdescription.style.display === '') {
        neetdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        neetdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function bitsattoggleDescription() {
    const bitsatdescription = document.getElementById('bitsatdescription');
    const infoBox = document.querySelector('.info-box');

    if (bitsatdescription.style.display === 'none' || bitsatdescription.style.display === '') {
        bitsatdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        bitsatdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function nesttoggleDescription() {
    const nestdescription = document.getElementById('nestdescription');
    const infoBox = document.querySelector('.info-box');

    if (nestdescription.style.display === 'none' || nestdescription.style.display === '') {
        nestdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        nestdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}