setTimeout(function() {
    var loadingPage = document.querySelector('.loading-page');
    if (loadingPage) {
        loadingPage.style.opacity = '0';
        setTimeout(function() {
            loadingPage.style.display = 'none';
        }, 1000);
    }
}, 5000);