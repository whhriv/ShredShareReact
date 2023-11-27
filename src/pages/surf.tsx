
import  Card  from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/SideBar';
import Body from '../components/Body';

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
        {surf && surf.map((sarf) => (
          <Card  key={sarf.id}>
            <Card.Body>
            <Card.Title>{sarf.title}</Card.Title>
                <Card.Text>{sarf.description}</Card.Text>
                <Card.Text>Make: {sarf.make}</Card.Text>
                <Card.Text>Model: {sarf.model}</Card.Text>
                <Card.Text>Length: {sarf.length}</Card.Text>
                <Card.Text>userID {sarf.userId}</Card.Text>
            </Card.Body>
          </Card>
       ))}
       </div>
     )}
     </Body>
   </>
 );
}