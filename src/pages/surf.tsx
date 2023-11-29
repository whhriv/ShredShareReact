
import  Card  from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/SideBar1';
import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
type SurfType = {
  id: number;
  title: string;
  description: string;
  make: string;
  model: string;
  length: string;
  dateCreated: string;
  userId: number;
};

type SurfProps = {}
export default function Surf({}:SurfProps) {
  const [surf, setSurf] = useState<SurfType[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/surf');
        
        if (response.ok) {
          const results = await response.json();
          console.log('API response:', results); 

            setSurf(results);
          
        } else {
          setError('Response not okay');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };


    fetchData();
  }, []);
  return (
    <>
    <Body sidebar>
     {error ? (
        <div>Error: {error}</div>
      ) : (
      <div>
        
        {surf && surf.map((surf) => (
          <Container>
          <Card className="bg-transparent shadow-1-strong ms-3" key={surf.id}>
            <Card.Body>
            <Card.Title>{surf.title}</Card.Title>
                <Card.Text>{surf.description}</Card.Text>
                <Card.Text>Make: {surf.make}</Card.Text>
                <Card.Text>Model: {surf.model}</Card.Text>
                <Card.Text>Length: {surf.length}</Card.Text>
                <Card.Text>userID {surf.userId}</Card.Text>
            </Card.Body>
          </Card>
          </Container>
       ))}
       </div>
     )}
     </Body>
   </>
 );
}