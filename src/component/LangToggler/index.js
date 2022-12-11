import React, { useContext } from 'react'
import LocaleContext from '../../context/LocaleContext'
import './index.css'

export default function LangToggler() {
    const { locale, setLocale } = useContext(LocaleContext)
    return (
        <button
         type='button'
         title={locale === 'id' ? 'Change to English' : 'Ubah ke Bahasa Indonesia'}
         className='lang-toggler'
            onClick={() => setLocale(locale === 'id' ? 'en' : 'id')}
        >
            {locale === 'id' ? 'EN' : 'ID'}
        </button>
    )
}

