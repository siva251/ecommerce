import React from "react";
import './homepage.styles.scss';
import { Directory } from "../../Components/directory/directory.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    );
}

export default HomePage;