import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import viewNav from '../views/nav/index';
import formConnect from '../views/connexion/index';

const LogIn = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async handleLogIn(user) {
    user.preventDefault();

    const formData = new FormData(user.target);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (!data.email || !data.password) {
      Swal.fire({
        position: 'top-end',
        icon: 'question',
        title: 'Les champs email et mot de passe sont obligatoires.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.dataLogIn(data);
  }

  async dataLogIn(data) {
    try {
      const response = await axios.post('http://localhost:83/LogIn', data);
      const result = JSON.parse(response.data);
      Cookies.set('session_id', result.session_id);
      Cookies.set('user_id', result.user_id);
      Cookies.set('first_name', result.first_name);
      document.location.href = '/';
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Erreur de connexion. Veuillez réessayer.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      passwordInput.type = 'password';
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  }

  attachEventListeners() {
    const eyeIcon = document.getElementById('eye-icon');
    const form = this.el.querySelector('#login-form');
    form.addEventListener('submit', this.handleLogIn.bind(this));
    eyeIcon.addEventListener('click', () => this.togglePasswordVisibility());
  }

  render() {
    return `
      ${viewNav('', '')}
      ${formConnect('logIn')}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.attachEventListeners();
  }
};

export default LogIn;
