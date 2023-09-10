import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Header() {
  return (
    <div className="flex justify-center px-[1.0625rem] py-[1.125rem]">
      <Link to="/mainpage">
        <Logo width={74} height={28} />
      </Link>
    </div>
  );
}
