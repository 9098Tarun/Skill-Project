function NEETtoggleDescription() {
    const NEETdescription = document.getElementById('NEETdescription');
    const infoBox = document.querySelector('.info-box');

    if (NEETdescription.style.display === 'none' || NEETdescription.style.display === '') {
        NEETdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        NEETdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function icartoggleDescription() {
    const icardescription = document.getElementById('icardescription');
    const infoBox = document.querySelector('.info-box');

    if (icardescription.style.display === 'none' || icardescription.style.display === '') {
        icardescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        icardescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function bhutoggleDescription() {
    const bhudescription = document.getElementById('bhudescription');
    const infoBox = document.querySelector('.info-box');

    if (bhudescription.style.display === 'none' || bhudescription.style.display === '') {
        bhudescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        bhudescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}

function SSCtoggleDescription() {
    const SSCdescription = document.getElementById('SSCdescription');
    const infoBox = document.querySelector('.info-box');

    if (SSCdescription.style.display === 'none' || SSCdescription.style.display === '') {
        SSCdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        SSCdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}