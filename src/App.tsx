
import './App.css';
import Card from './components/CardComponent/Card';
import { useEffect, useState } from 'react';

const App = () => {
  interface User {
    // Define la estructura de la respuesta de la API
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
  }

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUserData = (): void => {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => {
        const user: User = {
          // Parsea los datos de la respuesta a la estructura definida
          name: {
            first: data.results[0].name.first,
            last: data.results[0].name.last,
          },
          email: data.results[0].email,
          phone: data.results[0].phone,
          picture: {
            large: data.results[0].picture.large,
          },
        };
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className='App'>
      {isLoading ? (
        <p>Loading...</p>
      ) : user ? (
        <Card user={user} />
      ) : (
        <p>Failed to load user information.</p>
      )}
    </div>
  );
}

export default App;
