const toggle = document.getElementById('profileToggle');
const menu = document.getElementById('dropdownMenu');

// Toggle dropdown
toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Close when clicking outside
document.addEventListener('click', function () {
    menu.style.display = 'none';
});

// Menu navigation
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const link = this.getAttribute('data-link');
        window.location.href = link;
    });
});