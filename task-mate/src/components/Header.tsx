import logo from '../assets/react.svg'

type HeaderProps = {
    children: string;
    theme: string;
    setTheme: (theme: string) => void;
};

const Header = ({ children, theme, setTheme }: HeaderProps) => {
    return (
        <header>
            <span className='logo'>
                <img src={logo} alt="logo" />
                <span>{children}</span>
            </span>
            <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={
                    theme === "light" ? "light activeTheme" : "light"}>
                </span>
                <span onClick={() => setTheme("medium")} className={
                    theme === "medium" ? "medium activeTheme" : "medium"}>
                </span>
                <span onClick={() => setTheme("dark")} className={
                    theme === "dark" ? "dark activeTheme" : "dark"}>
                </span>
            </span>
        </header>
    )
}

export default Header
