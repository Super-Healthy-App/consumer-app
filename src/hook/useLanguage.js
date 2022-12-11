import { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'
import content from '../utils/content'

function useLanguage() {
  const { locale } = useContext(LocaleContext)

  return content[locale]
}

export default useLanguage
