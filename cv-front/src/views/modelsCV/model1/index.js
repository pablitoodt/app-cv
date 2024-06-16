import './index.scss';

export default (log) => (
  `
  <section class="main">
    <article class="cv" id="cv">
      <div class="left">
        <div class="cv-pic-area">
          <img src="http://localhost:82/pablo.png" alt="http://localhost:82/pablo.png" class="cv-pic">
        </div>
        <div class="description-area" id="description-area">
        </div>
      </div>
      <div class="right">
        <h2 class="first-name"></h2>
        <h2 class="last-name"></h2>
        <h3 class="look-for"></h3>

        <div class="right-description-area" id="right-description-area">
          <div class="right-categorie-area">
            <h3>Formation</h3>
            <hr class="right-hr">
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>CODA_ , 45 000 Orléans</p>
              <p><b>Bachelor Développeur Fullstack</b></p>
            </div>
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>Lycée Jean Zay, 45 000 Orléans</p>
              <p><b>Baccalauréat général mention Euro espagnol</b></p>
            </div>
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>Lycée Jean Zay, 45 000 Orléans</p>
              <p><b>Baccalauréat général mention Euro espagnol</b></p>
            </div>
          </div>
          <div class="right-categorie-area">
            <h3>Formation</h3>
            <hr class="right-hr">
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>CODA_ , 45 000 Orléans</p>
              <p><b>Bachelor Développeur Fullstack</b></p>
            </div>
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>Lycée Jean Zay, 45 000 Orléans</p>
              <p><b>Baccalauréat général mention Euro espagnol</b></p>
            </div>
            <div class="formation-section">
              <p><b>2023 - 2026</b></p>
              <p>Lycée Jean Zay, 45 000 Orléans</p>
              <p><b>Baccalauréat général mention Euro espagnol</b></p>
            </div>
          </div>
        </div>
      </div>
      <img src="http://localhost:82/logo_coda.png" alt="" class="testtutu">
    </article>

    <article class="side-form">
      <form id="form" class="form" style="display: ${log ? 'block' : 'none'};">
        <label for="title-cv" class="label-cv-form">CV TITLE: </label>
        <input type="text" class="input-cv-form" id="title-form">

        <button id="button-send-cv" type="button">Enregistrer</button>
      </form>
      <div class="connecter-div" style="display: ${log ? 'none' : 'block'};">
        <h2>Veuillez vous connecter vous pouvoir modifier votre CV</h2>
        <a href="/logIn">Se connecter</a>
      </div>
    </article>
  </section>
`);
