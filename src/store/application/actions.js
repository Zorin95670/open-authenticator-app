export function setLanguage({ commit }, language) {
  window.localStorage.setItem('lang', language);
  commit('setLanguage', language);
  return language;
}

export function init({ commit }) {
  let language = window.localStorage.getItem('lang');
  if (!language) {
    language = 'en-US';
  }
  return setLanguage({ commit }, language);
}
