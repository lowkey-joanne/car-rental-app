import CarList from "../components/CarList"

const Home = ({blogs}) => {
  return (
    <div className='page-container'>
        <h1>car rental</h1>
        <CarList blogs={blogs}/>
    </div>
  )
}

export default Home