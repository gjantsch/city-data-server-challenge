import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Simple CRUD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">List <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/edit">New Form</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}
