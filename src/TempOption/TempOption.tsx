import classes from './TempOption.module.css'
import { useState } from 'react';
import clsx
 from 'clsx';
export default function TempOption(){
    const [active, setActive] = useState(false)

    const buttonClass = clsx([classes.temp_button], {
        [classes.active_btn] : active
    })

    const buttonClass2 = clsx([classes.temp_button], {
        [classes.active_btn] : !active
    })

    function handleTempClick(e: React.MouseEvent<HTMLButtonElement>){
        console.log(e.currentTarget.value)
        setActive(prev=>!prev)
    }

    return(
        <div className={classes.button_container}>
        <button className={buttonClass2} onClick={(e)=>handleTempClick(e)} value="°C">°C</button>
        <button className={buttonClass} onClick={(e)=>handleTempClick(e)} value="°F">°F</button>
        </div>
    )
}

/**
 * By default C is active
 * the active class switches onClick */ 