document.addEventListener('DOMContentLoaded', function() {
    const pages = ['Resume', '(Extended)', 'Media', 'About'];
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

    showPage('resume'); // Show the home page by default
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
