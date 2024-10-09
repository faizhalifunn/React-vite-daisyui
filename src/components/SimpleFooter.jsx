    import React from 'react';
    import "../app.css"

    function Footer() {
    return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Puna</p>
        </aside>
    </footer>
    );
    }

    export default Footer;
