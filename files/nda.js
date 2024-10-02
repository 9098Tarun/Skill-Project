function NDAtoggleDescription() {
    const NDAdescription = document.getElementById('NDAdescription');
    const infoBox = document.querySelector('.info-box');

    if (NDAdescription.style.display === 'none' || NDAdescription.style.display === '') {
        NDAdescription.style.display = 'block';
        infoBox.style.height = 'auto';  // Adjust height to fit content
    } else {
        NDAdescription.style.display = 'none';
        infoBox.style.height = 'initial'; // Reset height
    }
}