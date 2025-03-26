import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
    export default Root;