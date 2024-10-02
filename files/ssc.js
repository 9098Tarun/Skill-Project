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