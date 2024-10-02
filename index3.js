function CAtoggleDescription() {
    const CAdescription = document.getElementById('CAdescription');
    const infoBox = document.querySelector('.info-box');

    if (CAdescription.style.display === 'none' || CAdescription.style.display === '') {
        CAdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
       CAdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}
function CLATtoggleDescription() {
    const CLATdescription = document.getElementById('CLATdescription');
    const infoBox = document.querySelector('.info-box');

    if (CLATdescription.style.display === 'none' || CLATdescription.style.display === '') {
        CLATdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
       CLATdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}
function CSEETtoggleDescription() {
    const CSEETdescription = document.getElementById('CSEETdescription');
    const infoBox = document.querySelector('.info-box');

    if (CSEETdescription.style.display === 'none' || CSEETdescription.style.display === '') {
        CSEETdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
       CSEETdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}