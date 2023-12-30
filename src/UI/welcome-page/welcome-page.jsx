import { useState, useEffect } from 'react';
import classes from './welcome-page.module.css';

import { IoLogoWechat } from "react-icons/io5";


export default function WelcomePage() {
    const [pageRefresh, setPageRefresh] = useState(false);

    useEffect(() => {
        setPageRefresh(true);
        function refreshPageFun() {
            setTimeout(() => {
                setPageRefresh(false);
            }, 3000);
        }
        refreshPageFun();
    }, []);

    return (
        <>
            {pageRefresh && <div className="text-center">
                <div className={classes.welcome_container}>
                    <p>Welcome To Chat</p>
                    <i><IoLogoWechat /></i>
                    <p>Loading...</p>
                </div>
            </div>}
        </>
    )
}