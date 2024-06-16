import './index.scss';

export default (connexion) => (
  connexion === 'logIn'
    ? `
    <div class="form-container">
      <h3 class="register-form-title">Se connecter</h3>
      <form action="" id="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" name="email" class="input-connexion">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" name="password" class="input-connexion">
          <span id="eye-icon">
            <i class="fa-solid fa-eye"></i>
          </span>
        </div>
        <div class="form-group">
          <a href='/register' class="connexion-link">Lien vers la page d'inscription</a>
          <input type="submit" value="Valider" id="submit-button-logIn">
        </div>
      </form>
    </div>
    `
    : `
    <div class="form-container">
      <h3 class="register-form-title">S'inscrire</h3>
      <form action="" id="register-form">
        <div class="form-group">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" id="first-name" name="first-name" class="input-connexion">
        </div>
        <div class="form-group">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" id="last-name" name="last-name" class="input-connexion">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" name="email" class="input-connexion" required>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" name="password" class="input-connexion">
          <span id="eye-icon">
            <i class="fa-solid fa-eye"></i>
          </span>
        </div>
        <div class="form-group">
          <a href='/logIn' class="connexion-link">Lien vers la page de connexion</a>
          <input type="submit" value="Valider" id="submit-button">
        </div>
      </form>
    </div>
    `
);
