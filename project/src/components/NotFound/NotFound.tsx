import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1
        style={{
          fontSize: '50px',
        }}
      >
        404 Not Found
      </h1>
      <Link
        to="/"
        style={{
          textShadow: '1px 0 0, 0.5px 0 0, -1px 0 0',
          color: '#fff',
          backgroundColor: '#4481c3',
          padding: '9px 21px 6px 11px',
          fontSize: '19px',
          lineHeight: '1.211',
        }}
      >
        Go to main page
      </Link>
    </div>
  );
}

export default NotFound;
