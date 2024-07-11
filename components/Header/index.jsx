import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Image
        src="./Ctech Europe.svg"
        alt="ctech logo"
        height={50}
        width={150}
      />
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
      <div className="header-container-flags">
        <Image src="./English Site.svg" alt="" width={24} height={24} />
        <Image src="./German Site.svg" alt="" width={24} height={24} />
        <Image src="./Spanish Site.svg" alt="" width={24} height={24} />
      </div>
      <div className="header-cta">
        <a href="">Request a callback</a>
      </div>
    </header>
  );
};

export default Header;
