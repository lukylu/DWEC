window.onload = function() {
    const button = this.document.getElementById("colorButton");
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    let currentIndex = 0;

    button.addEventListener('click', function() {
        button.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });
}