import { FcSearch } from 'react-icons/fc';

import inputCss from './input.module.css'

const input = (props) => {
    return (
        <div className={inputCss.cont}>
            <FcSearch />
            <input className={inputCss.input} type='search'
                placeholder="search users" 
                onChange={props.onChangeEventHandler} 
            />
        </div>
    )
}

export default input;