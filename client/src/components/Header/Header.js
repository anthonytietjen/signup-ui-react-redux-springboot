import logo from '../../logo.svg'
import './Header.css'

export const Header = () => (
  <header className="header">
    <img
      src={logo}
      className="logo"
      data-testid="logo"
      alt="Logo"
    />
  </header>
)