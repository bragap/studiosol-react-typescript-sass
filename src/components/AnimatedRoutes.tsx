//pages
import Home from "../pages/Home";
import BookScreen from "../pages/BookScreen";

// react router dom
import { Routes, Route, useLocation } from 'react-router-dom';

// framer motion
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<Home />} />
                <Route path="/book/:id" element={<BookScreen />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;