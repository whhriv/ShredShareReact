
import  Card  from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
// import Body from '../components/Body';

// const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
type SkiType = {
  id: number;
  title: string;
  description: string;
  make: string;
  model: string;
  length: string;
  binding: string;
  dateCreated: string;
  userId: number;
};

type SkiProps = {}
export default function Skis({}:SkiProps) {
  const [skis, setSkis] = useState<SkiType[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/skis');
        
        if (response.ok) {
          const results = await response.json();
          console.log('API response:', results); 

            setSkis(results);
          
        } else {
          setError('Response not okay');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };
        
        
    //     if (response.ok) {
    //       const results = await response.json();
    //       setSkis(results.data);
    //       console.log('seems to work here')
    //       console.log(results.data)
    //     } else {
    //       console.log('Response not okay');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    fetchData();
  }, []);
  return (
    <>
     {error ? (
        <div>Error: {error}</div>
      ) : (
      <div>
        {skis && skis.map((ski) => (
          <Card key={ski.id}>
            <Card.Body>
            <Card.Title>{ski.title}</Card.Title>
                <Card.Text>{ski.description}</Card.Text>
                <Card.Text>Make: {ski.make}</Card.Text>
                <Card.Text>Model: {ski.model}</Card.Text>
                <Card.Text>Length: {ski.length}</Card.Text>
                <Card.Text>Binding: {ski.binding}</Card.Text>
            </Card.Body>
          </Card>
       ))}
       </div>
     )}
   </>
 );
}