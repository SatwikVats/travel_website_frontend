export const Navbar = () => {
    return(
        <header className="heading d-flex align-center">
            <h1 className="heading-title">
                <a className="link" href="/">Page Title</a>
            </h1>
            <nav className="d-flex align-centre gap-large">
                <div className="nav d-flex align-centre cursor-pointer">
                    <span className="material-icons-outlined">menu</span>
                    <span className="material-icons-outlined">account_circle</span>
                </div>
            </nav>
        </header>
    )
}