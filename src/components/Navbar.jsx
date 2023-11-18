
function Navbar() {
    return (
        <nav id="nav" className="navBar">
            <div className="logo">
                <img src="src/assets/images/LOGO.png" alt="ACM AJCE Logo" />
            </div>
            <div className="links">
                <a href="#about">ABOUT</a>
                <a href="/">EVENTS</a>
                <a href="/">GALLERY</a>
                <a href="/">EXECOM</a>
                {/* <a href="/" className="womensLink">WOMEN'S CHAPTER</a> */}
            </div>
        </nav>
    );
}

export default Navbar;