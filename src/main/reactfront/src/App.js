import './App.css';
import {Route, Routes} from "react-router-dom";
import UserListComponent from "./component/user/UserListComponent";
import TestComponent from "./component/test/TestComponent";
import Home from "./component/home/Home";
import "./index.css"
import ShoppingListComponent from "./component/test/ShoppingListComponent";
import LoginPage from "./component/user/LoginPage";
import BoardComponent from './component/test/BoardComponent';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/user" element={<UserListComponent />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/shop" element={<ShoppingListComponent />} />
            <Route path="/board" element={<BoardComponent />} />
        </Routes>
    );
};

export default App;
