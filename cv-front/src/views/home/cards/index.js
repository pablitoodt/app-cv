import './index.scss';

export default (cvModels) => `
  <section class="collection_cv">
    ${cvModels.map((cv) => `
      <div class="card">
        <img src="${cv.picture_name}" alt="">
        <a href="/cv?type=new&id=${cv.id}" class="card-link">Use this model</a>
      </div>
    `).join('')}
  </section>
`;
