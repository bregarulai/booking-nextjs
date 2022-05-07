import { Featured, Header, Navbar } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home__container'>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
