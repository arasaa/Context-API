import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const ToDoList = () =>{
    const { isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext)
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
        <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}} >
        <p className="item">plan the family trip</p>
        <p className="item">Go for shopping</p>
        <p className="item">Go for a walk</p>
        <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
    
    </div>
    )
}
export default ToDoList;