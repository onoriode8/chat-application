import { AiOutlineSearch } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { LuLock } from "react-icons/lu"


import classes from './nav_end.module.css'

export const NavEnd = () => (
    <div className={classes.nav_end_cont}>
        <div><AiOutlineSearch /></div>
        <div><BsPerson /></div>
        <div><LuLock /></div>
    </div>
)