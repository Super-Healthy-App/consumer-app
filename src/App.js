import React, { useMemo, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import LocaleContext from './context/LocaleContext'
import useLanguage from './hook/useLanguage'
import Navbar from './component/Navbar'
import Routes from './route'
import './index.css'


const App = () => {
    const [theme, setTheme] = useState()
    const [locale, setLocale] = useState('id')
    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])
    const valueLocale = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

    return (
        <ThemeContext.Provider value={value}>
            <LocaleContext.Provider value={valueLocale}>
                <div className="App">
                    <Navbar />
                    <Routes />
                </div>
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    )


}

export default App