import './index.scss';

export default (datas, cat_id) => (
  `
    <h2 class="my-cv-title">⚠️ Voici toutes les versions de votre CV ⚠️<h2>

    <section class="my-cv-collection">
    <table class="cv-table">
      <thead>
        <tr>
          <th>Nom de votre CV</th>
          <th>Date de création</th>
          <th>DELETE</th>
          <th>MODIFIER </th>
        </tr>
      </thead>
      <tbody>
          ${datas.length > 0 ? datas.map((data) => `
            <tr>
              <td><a href="/cv?type=old&catId=${cat_id}&id=${data.id}">${data.name}</a></td>
              <td>${data.creation_date}</td>
              <td><button class="trash-button"><i class="fa-solid fa-trash"></i></button></td>
              <td><button class="modifi-button"><a href="/cv?type=old&catId=${cat_id}&id=${data.id}"><i class="fa-regular fa-pen-to-square"></i></a></button></td>
            </tr>
          `).join('') : `
            <tr>
              <td colspan="4" class="no-data">Aucun CV disponible</td>
            </tr>
          `}
      </tbody>
    </table>
  </section>
  `
);
