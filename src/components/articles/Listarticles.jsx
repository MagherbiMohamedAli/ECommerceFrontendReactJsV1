import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Listarticles = () => {
  const [articles, setArticles] = useState([])
  //ngOnInit in angular
  useEffect(() => {
    getarticles()
  }, [])
  const getarticles = async () => {
    await axios.get("http://localhost:3001/api/articles")
      .then(res => {
        setArticles(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product ?")) {
      await axios.delete(`http://localhost:3001/api/articles/${id}`)
        .then(res => {
          getarticles()
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
           <h4>List of articles</h4>
            <Link className="btn btn-outline-light" to="/articles/add">
              Add an article
            </Link>
          </div>
        </nav>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Reference</th>
            <th>Designation</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, index) =>
            <tr key={index}>

              <td><img src={art.imageart} width={80} height={80} /></td>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>
              <td>{art.scategorieID}</td>
              <td><Button variant="warning"><i class="fa-solid fa-pen"></i></Button></td>
              <td><Button variant="danger" onClick={() => handleDelete(art._id)}><i class="fa-solid fa-trash"></i></Button></td>


            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default Listarticles