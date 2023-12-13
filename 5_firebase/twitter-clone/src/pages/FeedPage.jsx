import Aside from '../components/Aside';
import Main from '../components/Main';
import Nav from '../components/Nav';

const FeedPage = () => {
  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
};

export default FeedPage;
