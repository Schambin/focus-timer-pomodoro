let darkMode = true;
const toggleButton = document.getElementById('toggleMode')

toggleButton.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'Light' : 'Dark'
    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode
})