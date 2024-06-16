import './index.scss';

export default (indice, name) => (
  indice === true
    ? `
      <nav>
        <div>
          <a href='/'><img src="http://localhost:82/logo-remove.png" alt="" class="logo"></a>
        </div>
        <div>
          <p class="nav-name">Bonjour ${name},</p>
          <button class="button-connection" id="logout">Logout</button>
        </div>
      </nav>
    `
    : `
      <nav>
        <a href='/'><img src="http://localhost:82/logo-remove.png" alt="aucune image" class="logo"></a>
        <div>
          <a href="/logIn"><button class="button-connection">Log in</button></a>
        </div>
      </nav>
    `
);
