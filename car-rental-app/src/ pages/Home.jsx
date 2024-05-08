import CarListing from "../components/CarListing"

const Home = ({blogs}) => {
  return (
    <div className='page-container'>
        <h1>car rental</h1>
        <CarListing blogs={blogs}/>
    </div>
  )
}

export default Home