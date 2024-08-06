import axios from 'axios';
import Cookies from 'js-cookie';
import All from './All';
import viewNav from '../views/nav/index';
import viewCards from '../views/home/cards/index';
import viewFilters from '../views/home/filters/index';
import viewHomeText from '../views/home/homeText/index';
import viewMyCV from '../views/home/myCVSection/index';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.all = new All();
    this.run();
  }

  async getBackModelsColection() {
    try {
      const response = await axios.get('http://localhost:83/cvModels');
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getNumbersVersions() {
    try {
      const response = await axios.get('http://localhost:83/numbersVersions');
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getCatListName() {
    const data = {
      user_id: parseInt(Cookies.get('user_id')),
    };
    try {
      const response = await axios.post('http://localhost:83/cat', data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async render() {
    const cvModels = await this.getBackModelsColection();
    const catList = await this.getCatListName();
    console.log(catList);
    if (this.all.islog() === true) {
      return `
      ${viewNav(this.all.islog(), this.all.getName())}
      ${viewHomeText()}
      <h2 class="my-cv-title">⚠️ Tout vos modèles de CV ⚠️</h2>
      ${viewMyCV(Array.isArray(catList) ? catList : [])}
      ${viewFilters()}
      <div class="container">
        ${viewCards(cvModels)}
      </div>
    `;
    }
    return `
      ${viewNav(this.all.islog(), this.all.getName())}
      ${viewHomeText()}
      ${viewFilters()}
      <div class="container">
        ${viewCards(cvModels)}
      </div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    if (this.all.islog() === true) {
      this.all.logOut();
    }
  }
};

export default Home;
