const useDarkMode = () => { 
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const togletheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(togletheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, togletheme]);

    return [togletheme, setTheme];
}
export default useDarkMode;