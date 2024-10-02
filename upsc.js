function upsctoggleDescription() {
    const upscdescription = document.getElementById('upscdescription');
    const infoBox = document.querySelector('.info-box');

    if (upscdescription.style.display === 'none' || upscdescription.style.display === '') {
        upscdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        upscdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}