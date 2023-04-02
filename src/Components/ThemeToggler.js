import { Switch } from "@mui/material";
import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <Switch
            sx={{
                '& .MuiSwitch-switchBase': {
                    color: '#1a1815',
                    '&:hover': {
                        backgroundColor: 'black',
                        color: 'white'
                    }
                },
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'yellow',
                    '&:hover': {
                        backgroundColor: 'warning.dark',
                    },
                },
            }}
            onClick={() => {
                setThemeMode(themeMode === 'light' ? 'dark' : 'light')
            }} />
    )
}
export default ThemeToggler