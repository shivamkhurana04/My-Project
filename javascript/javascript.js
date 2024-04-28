document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));
});