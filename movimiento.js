const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (!panel.classList.contains('active')) {
            removeActiveClasses();
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
