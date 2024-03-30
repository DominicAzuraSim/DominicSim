document.addEventListener('DOMContentLoaded', function() {
    const pages = ['Summary Resume', 'Detailed Resume', 'Media', 'About Me'];
    const sidebar = document.getElementById('sidebar');

    pages.forEach(page => {
        const link = document.createElement('a');
        link.textContent = page;
        link.href = `#${page.toLowerCase()}`;
        link.onclick = function(e) {
            e.preventDefault();
            showPage(page.toLowerCase());
        };
        sidebar.appendChild(link);
    });

    showPage('home'); // Show the home page by default
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}
