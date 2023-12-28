import { FaBookDead } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const styles = {
  container: {
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'pink',
    marginRight: '20px',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1 style={styles.title}>Create your Deathnote</h1>
      <FaBookDead fill="yellow" fontSize="80" />
    </div>
  );
};

export default HomePage;