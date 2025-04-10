const Header = () => {
    return (
        <header  style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: "1rem",
            }}
        >
            <h1 style={{color: "#000"}}>Logo</h1>
            <nav>
                <ul style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;