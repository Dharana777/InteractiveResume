const toggle = document.getElementById('toggleDark');
const container = document.querySelector('.container');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.contains('bi-brightness-high-fill')) {
        this.classList.remove('bi-brightness-high-fill');
        container.style.background = 'black';
        container.style.color = 'white';
    } else {
        this.classList.add('bi-brightness-high-fill');
        container.style.background = 'white';
        container.style.color = 'black';
    }
});