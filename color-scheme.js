const browser_color_preference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const color_preference = localStorage.getItem('color-preference') || browser_color_preference;

document.documentElement.dataset.prefersColorScheme = color_preference;
localStorage.setItem('color-preference', color_preference);

document.querySelector('.set-color-scheme').addEventListener('click', e => {
    const new_color_preference = localStorage.getItem('color-preference') === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.prefersColorScheme = new_color_preference;
    localStorage.setItem('color-preference', new_color_preference);
});