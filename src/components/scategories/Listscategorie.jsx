import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Listscategorie = () => {
  const [scategories, setscategories] = useState([])
  useEffect(() => {
    getscategories()
  }, [])
  const getscategories = async () => {
    await axios.get("http://localhost:3001/api/scategories")
      .then(res => {
        setscategories(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this sub-category ?")) {
      await axios.delete(`http://localhost:3001/api/scategories/${id}`)
        .then(res => {
          getscategories()
        })
        .catch(error => {
          console.log(error)

        })
    }
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <h4>List of scategories</h4>
            <Link className="btn btn-outline-light" to="/scategories/add">
              Add a sub-category
            </Link>
          </div>
        </nav>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {scategories.map((scat, index) =>
            <tr key={index}>
              <td>{scat.nomscategorie}</td>
              <td><img src={scat.imagescategorie} width={80} height={80} /></td>
           
              <td><Button variant="warning"><i class="fa-solid fa-pen"></i></Button></td>
              <td><Button variant="danger" onClick={() => handleDelete(scat._id)}><i class="fa-solid fa-trash"></i></Button></td>


            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default Listscategorie




