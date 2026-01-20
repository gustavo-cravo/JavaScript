const tabs = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.content')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));

        content.forEach(t => t.classList.remove('active'));

        tab.classList.add('active')

        document.querySelector(`.content[data-content="${tabId}"]`)
        .classList.add('active');
    });
});