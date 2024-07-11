import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link href="/">
          <Image
            src="./Ctech Europe.svg"
            alt="ctech logo"
            height={50}
            width={130}
            className="header-logo"
          />
        </Link>

        <nav>
          <ul className="nav">
            <li>
              <Link href="systems" className="nav-text">
                Systems
              </Link>
            </li>
            <li>
              <Link href="systems" className="nav-text">
                PolyClay®️
              </Link>
            </li>
            <li>
              <Link href="systems" className="nav-text">
                NewsRoom
              </Link>
            </li>
            <li>
              <Link href="systems" className="nav-text">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="systems" className="nav-text">
                About
              </Link>
            </li>
            <li>
              <Link href="systems" className="nav-text">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-flags">
          <Link href="/eng">
            <Image
              src="./English Site.svg"
              alt=""
              width={22}
              height={22}
              className="flag"
            />
          </Link>
          <Link href="/ger">
            <Image
              src="./German Site.svg"
              alt=""
              width={22}
              height={22}
              className="flag"
            />
          </Link>
          <Link href="/spain">
            <Image
              src="./Spanish Site.svg"
              alt=""
              width={22}
              height={22}
              className="flag"
            />
          </Link>
        </div>
        <div className="header-cta">
          <a href="">Request a callback</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
