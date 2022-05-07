import { Featured, Header, Navbar, PropertyList } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home__container'>
        <Featured />
        <h1 className='home__title'>Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
