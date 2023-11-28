import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Body from '../components/Body';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserType from '../types/auth';

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

type SkiProps = {};

const CreateSki: React.FC<SkiProps> = () => {
  const [skis, setSkis] = useState<SkiType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [skiFormData, setSkiFormData] = useState<Partial<UserType>>(
    {
        title: '',
        description: '',
        make: '',
        model: '',
        length: '',
        binding: '',
    }
)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSkiFormData({...skiFormData, [e.target.name]: e.target.value})
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/createskis');

        if (response.ok) {
          const results = await response.json();
          setSkis(results);
        } else {
          setError('Response not okay');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const createSki = async () => {

    try {
      const response = await fetch('http://127.0.0.1:5000/api/createskis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: skiFormData.title,
          description: skiFormData.description,
          make: skiFormData.make,
          model: skiFormData.model,
          length: skiFormData.length,
          binding: skiFormData.binding,
          
        }),
      });

      if (response.ok) {
        // If successful, refresh the list of skis
        console.log('ski created from here in createSki fetch')
        // createSki()
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
            <h1 className="text-center">Create a new Ski</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form onSubmit={createSki}>
                        <Form.Label htmlFor='title'>Title</Form.Label>
                        <Form.Control value={skiFormData.title} name='title' onChange={handleInputChange} />

                        <Form.Label htmlFor='make'>make</Form.Label>
                        <Form.Control value={skiFormData.make} name='make' onChange={handleInputChange} />

                        <Form.Label htmlFor='model'>model</Form.Label>
                        <Form.Control value={skiFormData.model} name='model'  onChange={handleInputChange} />

                        <Form.Label htmlFor='length'>length</Form.Label>
                        <Form.Control value={skiFormData.length} name='length' onChange={handleInputChange} />

                        <Form.Label htmlFor='binding'>binding</Form.Label>
                        <Form.Control value={skiFormData.binding} name='binding'  onChange={handleInputChange} />

                        <Button type='submit' variant='outline-success' className='w-100 mt-3'>Add Ski</Button>
                    </Form>
                </Card.Body>
            </Card>
            </Body>
        </>
  );
};

export default CreateSki;
