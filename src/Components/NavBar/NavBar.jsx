import { Link } from "react-router";
import './NavBar.css';

export default function NavBar() {
  const pages = [
    {
      name: 'Home',
      display: 'Home',
      url: '/',
    },
    {
      name: 'States',
      display: 'States Data',
      url: '/States',
    }
  ];

  return (
    <nav>
      {pages.map(({url, display}) => (
        <Link to={url}>
          {display}
        </Link>
      ))}
    </nav>
  );
}