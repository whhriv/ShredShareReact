import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      alert('Please select an image to upload');
      return;
    }

    setFile(selectedFile);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': '87c8db3e6ce6cac1360cc630d3fa490f', 
        },
      });

      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.data.url);
        alert('Image uploaded successfully!');
      } else {
        alert('Error uploading image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <Form>
      <FormControl type="file" name="image" onChange={handleChange} />
      {imageUrl && (
        <div>
          <p>Image URL: {imageUrl}</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </Form>
  );
};

export default ImageUpload;
