import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Listcategorie = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getcategories()
  }, [])
  const getcategories = async () => {
    await axios.get("https://e-commerce-backend-node-js.vercel.app/api/categories")
      .then(res => {
        setCategories(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category ?")) {
      await axios.delete(`https://e-commerce-backend-node-js.vercel.app/api/categories/${id}`)
        .then(res => {
          getcategories()
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
            <h4>List of categories</h4>
            <Link className="btn btn-outline-light" to="/categories/add">
              Add a category
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
          {categories.map((cat, index) =>
            <tr key={index}>
              <td>{cat.nomcategorie}</td>
              <td><img src={cat.imagecategorie} width={80} height={80} /></td>
              <td><Button variant="warning"><i class="fa-solid fa-pen"></i></Button></td>
              <td><Button variant="danger" onClick={() => handleDelete(cat._id)}><i class="fa-solid fa-trash"></i></Button></td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default Listcategorie