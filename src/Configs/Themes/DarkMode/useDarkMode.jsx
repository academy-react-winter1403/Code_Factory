const useDarkMode = () => { 
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const toggletheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(toggletheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, toggletheme]);

    return [toggletheme, setTheme];
}
export default useDarkMode;