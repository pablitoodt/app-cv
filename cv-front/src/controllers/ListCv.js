import axios from 'axios';
import All from './All';
import viewListCv from '../views/ListCv/index';
import viewNav from '../views/nav/index';

const ListCv = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.all = new All();

    this.run();
  }

  async getListCv() {
    const data = {
      cat_id: parseInt(this.params.catId)
    };
    try {
      const response = await axios.post('http://localhost:83/listCv', data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async render() {
    const listCv = await this.getListCv();
    return `
      ${viewNav(this.all.islog(), this.all.getName())}
      ${viewListCv(Array.isArray(listCv) ? listCv : [], this.params.catId)}
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    if (this.all.islog() === true) {
      this.all.logOut();
    }
  }
};

export default ListCv;
