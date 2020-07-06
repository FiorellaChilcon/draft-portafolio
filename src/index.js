function googleTranslateElementInit() {
      new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };
const flagSelect = document.getElementById('flag');
  flagSelect.addEventListener('change', (e) => {
    const lang = e.target.value; 
    const languageSelect = document.querySelector('select.goog-te-combo');
    languageSelect.value = lang; 
    languageSelect.dispatchEvent(new Event('change'));
  });
