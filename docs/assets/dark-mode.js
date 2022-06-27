// Original idea by @matiaslopezd, https://github.com/feathersjs/docs/issues/1378

class DarkMode {

  constructor(dark = false) {
    this._light = !dark;
    this._key = 'dark-mode-feathers'
  }

  init() {
    this._light = (/true/i).test(window.localStorage.getItem(this._key));
    if (this._light) this.toggle(false);

    return this._light;
  }

toggle(light = this._light) {
    if (!light) {
      document.body.classList.add('dark');
      this._save();
    } else {
      document.body.classList.remove('dark');
      this._remove();
    }
    this._light = !light;

    return this._light;
  }

  _save() {
    window.localStorage.setItem(this._key, 'true');
  }

  _remove() {
    window.localStorage.removeItem(this._key);
  }

}

// export default DarkMode;

