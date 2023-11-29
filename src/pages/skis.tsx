
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import  Card  from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/SideBar1';
import Body from '../components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';  

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


    fetchData();
  }, []);
  return (
    <Body sidebar>
    
    <Row md="4">
      
        {skis.map((ski) => (
          <Col md="4" key={ski.id}>
            <Card className="bg-transparent shadow-1-strong m-4">
              <Card.Img variant="top" src={ski.image_url} />
              <Card.Body>
                <Card.Title>{ski.title}</Card.Title>
                <Card.Text>{ski.description}</Card.Text>
                <Card.Text>Make: {ski.make}</Card.Text>
                <Card.Text>Model: {ski.model}</Card.Text>
                <Card.Text>Length: {ski.length}</Card.Text>
                <Card.Text>Bindings: {ski.binding}</Card.Text>
                <Button variant="primary">Reserve!</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      )}
    </Row>
  
  </Body>
);
};


{/* <Body sidebar>
     {error ? (
        <div>Error: {error}</div>
      ) : (
      <div>
        {skis && skis.map((ski) => (
          <Card  key={ski.id}>
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
     </Body> */}