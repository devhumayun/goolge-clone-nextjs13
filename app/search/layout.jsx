import SearchHeader from '../Components/SearchHeader/page'
import './../globals.css'



export default function SearchLayout({ children }) {
  return (
      <>
        <SearchHeader />
        {children}
      </>
  )
}
