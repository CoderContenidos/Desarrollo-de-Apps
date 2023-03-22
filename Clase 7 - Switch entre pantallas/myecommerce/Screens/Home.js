import Categories from '../Components/Categories'
import Header from '../Components/Header'

const Home = ({setScreenSelected}) => {
  return (
    <>
        <Header title='Categories'/>
        <Categories setScreenSelected = {setScreenSelected}/>
    </>
  )
}

export default Home