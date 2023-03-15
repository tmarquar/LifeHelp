// Create a basic Header for the page that will allow user to navigate from Home to Settings
// and back to Home
import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
            <div>
                <p>
                <span className="heart">♥️</span>
                </p>
                <div>Test App</div>
            </div>
            <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        </header>
    );
    };

export default Header;
