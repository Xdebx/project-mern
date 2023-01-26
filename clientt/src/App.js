import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import React from 'react';
// import Nav from './Nav';

// const App = () => (

//   <div>
//     <Nav />
//     <h1>MERN CRUD</h1>

//   </div>

// );

// export default App;

import React, { useState, useEffect } from 'react';

import Nav from './Nav';

import axios from 'axios';



const App = () => {

    const [posts, setPosts] = useState([]);



    const fetchPosts = () => {

        axios

            .get(`${process.env.REACT_APP_API}/posts`)

            .then(response => {

                // console.log(response);

                setPosts(response.data);

            })

            .catch(error => alert('Error fetching posts'));

    };



    useEffect(() => {

        fetchPosts();

    }, []);

    

    return (

        <div className="container pb-5">

            <Nav />

            <br />

            <h1>MERN CRUD</h1>

            <hr />

            {posts.map((post, i) => (

                <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>

                    <div className="col pt-3 pb-2">

                        <h2>{post.title}</h2>

                        <p className="lead">{post.content.substring(0, 100)}</p>

                        <p>

                            Author <span className="badge">{post.user}</span> Published on{' '}

                            <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>

                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default App;