import './index.scss';

export default (datas) => `
  <section class="my-cv-collection">
    <table class="cv-table">
      <thead>
        <tr>
          <th>Nom de votre CV</th>
          <th>Versions</th>
          <th>Date de création</th>
          <th>Date de dernière modification</th>
        </tr>
      </thead>
      <tbody>
        ${datas.length > 0 ? datas.map((data) => `
          <tr>
            <td><a href="/listCv?catId=${data.id}">${data.name}</a></td>
            <td>${data.versions} versions</td>
            <td>${data.creation_at}</td>
            <td></td>
          </tr>
        `).join('') : `
          <tr>
            <td colspan="3" class="no-data">Aucun CV disponible</td>
          </tr>
        `}
      </tbody>
    </table>
  </section>
`;
