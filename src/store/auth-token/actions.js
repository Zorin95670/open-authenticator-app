import Dexie from 'dexie';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

let db = new Dexie('oaaDatabase');

db.version(1).stores({
  authTokens: '++id, name, secret', // Primary key and indexed props
  user: 'password',
});

export function getAllAuthTokens({ commit, state }) {
  return db.authTokens.toArray().then((hashedTokens) => {
    const tokens = hashedTokens.map((token) => ({
      ...token,
      secret: CryptoJS.AES.decrypt(token.secret, state.password).toString(CryptoJS.enc.Utf8),
    }));
    commit('setAuthTokens', tokens);
    return tokens;
  });
}

export function createAuthTokenWithoutReload({ state }, authToken) {
  return db.authTokens.add({
    name: authToken.name,
    secret: CryptoJS.AES.encrypt(authToken.secret, state.password).toString(),
  });
}

export function createAuthToken({ commit, state }, authToken) {
  return createAuthTokenWithoutReload({ state }, authToken)
    .then(() => getAllAuthTokens({ commit, state }));
}

export function applicationHavePassword() {
  return db.user.toArray().then((users) => users.length !== 0);
}

export function createApplicationPassword({ commit }, password) {
  return db.user.add({
    password: bcrypt.hashSync(password, 10),
  }).then(() => {
    commit('setPassword', password);
  });
}

export function updateApplicationPassword({ commit, state }, password) {
  return db.authTokens.toCollection().modify((token) => {
    token.secret = CryptoJS.AES.encrypt(
      CryptoJS.AES.decrypt(
        token.secret,
        password.old,
      ).toString(CryptoJS.enc.Utf8),
      password.new,
    ).toString();
  }).then(() => db.user.toCollection().modify((user) => {
    user.password = bcrypt.hashSync(password.new, 10);
  })).then(() => {
    commit('setPassword', password.new);
    return getAllAuthTokens({ commit, state });
  });
}

export function validateApplicationPassword({ commit }, password) {
  return db.user.toArray().then((users) => {
    if (users.length !== 1) {
      return Promise.reject();
    }
    if (bcrypt.compareSync(password, users[0].password)) {
      commit('setPassword', password);
      return Promise.resolve();
    }
    return Promise.reject();
  });
}

export function exportDefault({ state }, encrypted) {
  return db.authTokens.toArray().then((hashedTokens) => {
    if (encrypted) {
      return hashedTokens.map((token) => ({
        name: token.name,
        secret: token.secret,
      }));
    }
    return hashedTokens.map((token) => ({
      name: token.name,
      secret: CryptoJS.AES.decrypt(token.secret, state.password).toString(CryptoJS.enc.Utf8),
    }));
  });
}

export function deleteAll({ commit }) {
  Dexie.delete('oaaDatabase');
  db = new Dexie('oaaDatabase');
  db.version(1).stores({
    authTokens: '++id, name, secret', // Primary key and indexed props
    user: 'password, fingerprint',
  });
  commit('setPassword', null);
  commit('setAuthTokens', []);
  return Promise.resolve();
}
