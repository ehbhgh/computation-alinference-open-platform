class Storage {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clearItem() {
    localStorage.clear();
  }
  hasItem(key) {
    return this.getItem(key);
  }
}
export default new Storage();
