import React from 'react'
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Insertarticle = () => {
  let navigate = useNavigate();
  const [reference, setReference] = useState("")
  const [marque, setMarque] = useState("")
  const [designation, setDesignation] = useState("")
  const [prix, setPrix] = useState(0)
  const [qtestock, setQtestock] = useState(0)
  const [imageart, setImageart] = useState("")
  const [scategorieID, setScategorieID] = useState("")
  const [scategories, setScategories] = useState([])
  useEffect(() => {
    getscategories()
  }, [])
  const getscategories = async () => {
    try {
      const res = await axios.get("https://e-commerce-backend-node-js.vercel.app/api/scategories")
      setScategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const article = {
      reference: reference,
      designation: designation,
      marque: marque,
      prix: prix,
      qtestock: qtestock,
      imageart: imageart,
      scategorieID: scategorieID
    }
    await axios.post("https://e-commerce-backend-node-js.vercel.app/api/articles", article);
    navigate("/articles");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <h4 align="center">Add Article</h4>
          <div className='form mt-3'>
            <Form className="border p-3" >
              <Row className="mb-2">
                <Form.Group as={Col} md="6" >
                  <Form.Label >Reference *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Reference"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Designation *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group className="col-md-6">
                  <Form.Label>Marque *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Marque"
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                  />

                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Prix"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />

                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col-md-6 ">
                  <Form.Label>
                    Quantity stock<span className="req-tag">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    value={qtestock}
                    onChange={(e) => setQtestock(e.target.value)}
                    placeholder="Qté stock"
                  />

                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image"
                    value={imageart}
                    onChange={(e) => setImageart(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    type="select"
                    value={scategorieID}
                    onChange={(e) => setScategorieID(e.target.value)}
                  >
                    <option>Choose a sub-category</option>
                    {scategories.map((scat, index) =>
                      <option value={scat._id}>{scat.nomscategorie}</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Row>
              <Button variant="primary" onClick={(e => handleSubmit(e))}><i class="fa-solid fa-floppy-disk"></i> Save</Button>
              <Link className="btn btn-outline-danger mx-2" to="/articles">
                Cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Insertarticle