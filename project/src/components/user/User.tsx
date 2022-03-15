import {useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';

function UserLink() {
  const {login} = useAppSelector((state) => state);

  return (
    <li className="header__nav-item user">
      <Link to='/favorites' className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{login}</span>
      </Link>
    </li>
  );
}

export default UserLink;
