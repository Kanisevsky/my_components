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
            <Link href="systems">Systems</Link>
          </li>
          <li>
            <Link href="systems">PolyClay®️</Link>
          </li>
          <li>
            <Link href="systems">NewsRoom</Link>
          </li>
          <li>
            <Link href="systems">Case Studies</Link>
          </li>
          <li>
            <Link href="systems">About</Link>
          </li>
          <li>
            <Link href="systems">Contact</Link>
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
