import axios from 'axios';
import Swal from 'sweetalert2';
import viewNav from '../views/nav/index';
import formConnect from '../views/connexion/index';
import LogIn from './LogIn';

const Register = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.logIn = new LogIn();
    this.baseUrl = 'http://localhost:83/users';

    this.run();
  }

  async registerToBack(data) {
    try {
      const response = await axios.post(this.baseUrl, data);
      Swal.fire({
        text: 'Votre compte à été crée!',
        icon: 'success',
        confirmButtonText: 'Se connecter'
      }).then(() => {
        this.logInUser(data.email, data.password);
      });
      return response;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Email déjà existant!',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.',
          showConfirmButton: false,
          timer: 1500
        });
      }
      return error;
    }
  }

  logInUser(email, password) {
    const data = {
      email,
      password
    };
    this.logIn.dataLogIn(data);
  }

  handleFormSubmit() {
    const form = document.getElementById('register-form');
    const firstName = form.querySelector('#first-name').value;
    const lastName = form.querySelector('#last-name').value;
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;

    if (!firstName || !lastName || !email || !password) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Tous les champs sont obligatoires!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (!this.validateEmail(email)) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Veuillez entrer une adresse email valide.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password
    };
    this.registerToBack(data);
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

  validateEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  attachEventListeners() {
    const submitButton = document.getElementById('submit-button');
    const eyeIcon = document.getElementById('eye-icon');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleFormSubmit();
    });
    eyeIcon.addEventListener('click', () => this.togglePasswordVisibility());
  }

  run() {
    this.el.innerHTML = this.render();
    this.attachEventListeners();
  }

  render() {
    return `
      ${viewNav('', '')}
      ${formConnect('')}
    `;
  }
};

export default Register;
