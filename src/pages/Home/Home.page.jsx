import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoList from '../../components/videoList/VideoList.component';


import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>


      {authenticated ? (
        <>
          
          
          <VideoList/>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <div>
          <h1>Hello stranger!</h1>
          <Link to="/login">let me in →</Link>
        </div>

      )}
    </section>
  );
}

export default HomePage;
