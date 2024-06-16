import axios from 'axios';
import Cookies from 'js-cookie';
import All from './All';
import viewNav from '../views/nav/index';
import viewCv1 from '../views/modelsCV/model1/index';

const Cv = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.all = new All();

    this.run();
  }

  async getDatas(data) {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:83/DatasCv', data);
      console.log(response);
      const all = JSON.parse(response.data);
      const final = JSON.parse(all[0].data);
      return final;
    } catch (error) {
      return error;
    }
  }

  async generateCv() {
    const data = {
      id: this.params.id,
      type: this.params.type
    };
    // console.log(data);
    const response = await this.getDatas(data);
    this.cv = response;
    // console.log(this.cv);

    const pic = document.querySelector('.cv-pic');
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const lookFor = document.querySelector('.look-for');
    const primaryColorArea = document.querySelector('.left');
    const primaryColorText = document.querySelector('.last-name');

    pic.src = 'http://localhost:82/pablo.jpg';
    firstName.innerHTML = this.cv.datas.firstName;
    lastName.innerHTML = this.cv.datas.lastName;
    lookFor.innerHTML = this.cv.datas.lookFor;
    primaryColorArea.style.backgroundColor = this.cv.datas.mainColor;
    primaryColorText.style.color = this.cv.datas.mainColor;

    const descriptionArea = document.querySelector('.description-area');
    descriptionArea.innerHTML = '';

    this.cv.left.forEach((categorie) => {
      const categoriesArea = document.createElement('div');
      categoriesArea.classList.add('categorie-area');

      categoriesArea.innerHTML = `<h3>${categorie.type}</h3><hr class="left-hr">`;

      categorie.details.forEach((detail) => {
        const { label, values } = detail;
        if (label !== '') {
          const p = document.createElement('p');
          p.innerHTML = `<b>${label}</b>:`;
          categoriesArea.appendChild(p);
        }
        values.forEach((value) => {
          const p = document.createElement('p');
          p.classList.add('info');
          p.innerHTML = `${value}`;
          this.adjustFontSize(p, value);
          categoriesArea.appendChild(p);
        });
      });
      descriptionArea.appendChild(categoriesArea);
    });
  }

  async generateForm() {
    const data = {
      id: this.params.id,
      type: this.params.type
    };

    const response = await this.getDatas(data);
    this.cv = response;

    const formArea = document.querySelector('.form');
    const order = ['picture', 'firstName', 'lastName', 'lookFor', 'mainColor'];

    order.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(this.cv.datas, key)) {
        const value = this.cv.datas[key];
        const dataForm = document.createElement('div');
        const label = document.createElement('label');
        const input = key === 'lookFor' ? document.createElement('textarea') : document.createElement('input');
        label.classList.add('label-cv-form');

        if (key === 'picture') {
          label.innerHTML = 'Picture:';
          label.htmlFor = 'picture-form';
          input.type = 'file';
          input.id = 'picture-form';
          input.name = 'picture-form';
        } else if (key === 'firstName') {
          label.innerHTML = 'First Name: ';
          label.htmlFor = 'first-name-form';
          input.type = 'text';
          input.classList.add('input-cv-form');
          input.id = 'first-name-form';
          input.name = 'first-name-form';
          input.maxLength = 25;
          input.value = value;
        } else if (key === 'lastName') {
          label.innerHTML = 'Last Name: ';
          label.htmlFor = 'last-name-form';
          input.type = 'text';
          input.classList.add('input-cv-form');
          input.id = 'last-name-form';
          input.name = 'last-name-form';
          input.maxLength = 25;
          input.value = value;
        } else if (key === 'lookFor') {
          label.innerHTML = 'What are you looking for: ';
          label.htmlFor = 'look-for';
          input.id = 'look-for';
          input.name = 'look-for';
          input.value = value;
          input.classList.add('textarea-cv-form');
        } else if (key === 'mainColor') {
          label.innerHTML = 'Color: ';
          label.htmlFor = 'main-color';
          input.type = 'color';
          input.id = 'main-color';
          input.name = 'main-color';
          input.value = value;
          input.classList.add('color-cv-form');
        }
        dataForm.appendChild(label);
        dataForm.appendChild(input);
        formArea.appendChild(dataForm);
      }
    });

    this.submitButtonLink(this.cv);
    this.linkFormCv();
  }

  async submitButtonLink(data) {
    document.getElementById('button-send-cv').addEventListener('click', (event) => {
      event.preventDefault();
      this.createTab(data);
    });
  }

  createTab(data) {
    const response = data;

    const firstName = document.getElementById('first-name-form').value;
    const lastName = document.getElementById('last-name-form').value;
    const lookFor = document.getElementById('look-for').value;
    const mainColor = document.getElementById('main-color').value;

    response.datas.firstName = firstName;
    response.datas.lastName = lastName;
    response.datas.lookFor = lookFor;
    response.datas.mainColor = mainColor;

    this.sendDatas(response);
  }

  async sendDatas(data) {
    const title = document.getElementById('title-form').value;
    const result = {
      name: title,
      models_id: 1,
      users_id: Cookies.get('user_id'),
      data,
      cat_cv_id: null,
      type: this.params.type
    };

    if (this.params.type === 'new') {
      try {
        const response = await axios.post('http://localhost:83/newCat', result);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre CV vient d\'être crée.',
          showConfirmButton: false,
          timer: 1500
        });
        return response;
      } catch (error) {
        return error;
      }
    } else {
      result.cat_cv_id = this.params.catId;
      try {
        const response = await axios.post('http://localhost:83/newCat', result);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre CV vient d\'être mis à jour.',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(response);
        return response;
      } catch (error) {
        return error;
      }
    }
  }

  linkFormCv() {
    document.getElementById('first-name-form').addEventListener('input', (event) => {
      const firstName = event.target.value;
      const firstNameElement = document.querySelector('.first-name');
      firstNameElement.textContent = firstName;
      this.adjustFontSize(firstNameElement, firstName);
    });
    document.getElementById('last-name-form').addEventListener('input', (event) => {
      const lastName = event.target.value;
      const lastNameElement = document.querySelector('.last-name');
      lastNameElement.textContent = lastName;
      this.adjustFontSize(lastNameElement, lastName);
    });
    document.getElementById('look-for').addEventListener('input', (event) => {
      const lookFor = event.target.value;
      const lookForElement = document.querySelector('.look-for');
      lookForElement.textContent = lookFor;
    });
    document.getElementById('main-color').addEventListener('input', (event) => {
      const color = event.target.value;
      document.querySelector('.left').style.backgroundColor = color;
      document.querySelector('.last-name').style.color = color;
    });
  }

  adjustFontSize(element, value) {
    const textContent = element;
    const length = value.length;
    let fontSize;

    if (length > 20) {
      fontSize = '8pt';
    } else if (length > 15) {
      fontSize = '9pt';
    } else if (length > 10) {
      fontSize = '9pt';
    } else {
      fontSize = '9pt';
    }

    textContent.style.fontSize = fontSize;
  }

  render() {
    return `
      ${viewNav(this.all.islog(), this.all.getName())}
      ${viewCv1(this.all.islog())}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.generateCv();
    this.generateForm();
    if (this.all.islog() === true) {
      this.all.logOut();
    }
  }
};

export default Cv;
