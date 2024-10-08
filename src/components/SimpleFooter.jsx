    import React from 'react';

    function Footer() {
    return (
        <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Create by Puna, Still in development</p>
        </footer>
    );
    }

    const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    };

    const navStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    };

    export default Footer;
