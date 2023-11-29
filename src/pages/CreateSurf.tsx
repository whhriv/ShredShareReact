import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Body from '../components/Body';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import UserType from '../types/auth';
import ImageUpload from '../components/ImageUpload';
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

type SurfProps = {};

const CreateSurf: React.FC<SurfProps> = () => {
  const [surf, setSurf] = useState<SurfType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [surfFormData, setSurfFormData] = useState<Partial<SurfType>>(
    {
        title: '',
        description: '',
        make: '',
        model: '',
        length: '',
        
    }
)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSurfFormData({...surfFormData, [e.target.name]: e.target.value})
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/surf');

        if (response.ok) {
            console.log('response OK from fetch')
          const results = await response.json();
          setSurf(results);
        } else {
          setError('Response not okay');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        console.log('finally---setloading stuff error')
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CreateSurf = async () => {

    try {
      const response = await fetch('http://127.0.0.1:5000/api/createsurf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: surfFormData.title,
          description: surfFormData.description,
          make: surfFormData.make,
          model: surfFormData.model,
          length: surfFormData.length,
          binding: surfFormData.binding,
          // imageUrl: surfFormData.imageUrl
          
        }),
      });

      if (response.ok) {
        // If successful, refresh the list of skis
        console.log('surfboard created from here in CreateSurf fetch')
        // CreateSurf()
      } else {
        setError('Failed to create a new ski');
      }
    } catch (error) {
      console.error('Error creating a new ski:', error);
      setError('Error creating a new ski');
    }
  };

  return (

 <>
        <Body sidebar>
            <h1 className="text-center">Create a new surfboard</h1>
            <Container>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={CreateSurf}>
                        <Form.Label htmlFor='title'>Title</Form.Label>
                        <Form.Control value={surfFormData.title} name='title' onChange={handleInputChange} />

                        <Form.Label htmlFor='make'>make</Form.Label>
                        <Form.Control value={surfFormData.make} name='make' onChange={handleInputChange} />

                        <Form.Label htmlFor='model'>model</Form.Label>
                        <Form.Control value={surfFormData.model} name='model'  onChange={handleInputChange} />

                        <Form.Label htmlFor='length'>length</Form.Label>
                        <Form.Control value={surfFormData.length} name='length' onChange={handleInputChange} />

                        <Form.Label htmlFor='description'>description</Form.Label>
                        <Form.Control value={surfFormData.description} name='description'  onChange={handleInputChange} />

                        <Form.Label htmlFor='image'>Image</Form.Label>
                        <ImageUpload onUpload={(imageUrl) => setSurfFormData({...surfFormData, imageUrl})} />


                        <Button type='submit' variant='outline-success' className='w-100 mt-3'>Add Surfboard</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Container>
            </Body>
        </>
  );
};

export default CreateSurf;