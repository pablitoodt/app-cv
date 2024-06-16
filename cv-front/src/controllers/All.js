import Cookies from 'js-cookie';

const All = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.session = false;
  }

  islog() {
    if (Cookies.get('session_id')) {
      this.session = true;
    } else {
      this.session = false;
    }
    return this.session;
  }

  getName() {
    return Cookies.get('first_name');
  }

  logOut() {
    document.querySelector('#logout').addEventListener('click', () => {
      Cookies.remove('session_id');
      Cookies.remove('user_id');
      Cookies.remove('first_name');
      document.location.href = '/';
    });
  }
};

export default All;
