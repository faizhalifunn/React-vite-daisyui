import "../app.css"

function Navbar() {
        return (
    <div>
        <div className="navbar bg-base-100 w-full fixed top-0">
            <div className="navbar-start">
            <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Faiz</a></li>
                <li>
                <details>
                    <summary>Zhalifun</summary>
                    <ul className="p-2">
                    <li><a>Ipun</a></li>
                    <li><a>Puna</a></li>
                    </ul>
                </details>
                </li>
                <li><a>Nafzi</a></li>
            </ul>
            </div>
            <div className="navbar-end">
            <a className="btn">Button</a>
            </div>
        </div>
    </div>
    );
}
    
    export default Navbar;
    