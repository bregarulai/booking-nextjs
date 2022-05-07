import { Featured, Header, Navbar } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home__container'>
        <Featured />
        <h1 className='home__title'>Browse by property type</h1>
      </div>
    </div>
  );
};

export default Home;
