import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Insertscategorie = () => {
  let navigate = useNavigate();
  const [nomscategorie, setNomscategorie] = useState('');
  const [imagescategorie, setImagescategorie] = useState('');
  const [categorieID, setCategorieID] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getcategories();
  }, []);

  const getcategories = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/categories');
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scategorie = {
      nomscategorie: nomscategorie,
      imagescategorie: imagescategorie,
      categorieID: categorieID,
    };

    await axios.post('http://localhost:3001/api/scategories', scategorie);
    navigate('/scategories');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h4 align="center">Add a sub-category</h4>
          <div className="form mt-3">
            <Form className="border p-3">
              <Row className="mb-2">
                <Form.Group as={Col} md="6">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={nomscategorie}
                    onChange={(e) => setNomscategorie(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image"
                    value={imagescategorie}
                    onChange={(e) => setImagescategorie(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={categorieID}
                    onChange={(e) => setCategorieID(e.target.value)}
                  >
                    <option>Choose a category</option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat._id}>
                        {cat.nomcategorie}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Row>
              <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                <i className="fa-solid fa-floppy-disk"></i> Save
              </Button>
              <Link className="btn btn-outline-danger mx-2" to="/scategories">
                Cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insertscategorie;
