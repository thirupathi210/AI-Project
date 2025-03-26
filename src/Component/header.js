import React from 'react';
// import './Style/nav.css';
export default function header() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="./images/sony-music.webp" alt="Logo" style={{ height: '40px' }} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./signup">sinup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./task6">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./contact">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Tasks
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/task1">Task-1</a></li>
            <li><a className="dropdown-item" href="/task2">Task-2</a></li>
            <li><a className="dropdown-item" href="/task3">Task-3</a></li>
            <li><a className='dropdown-item' href='/task4'>Task-4</a></li>
            <li><a className='dropdown-item' href='/task5'>Task-5</a></li>
            {/* <li><a className='dropdown-item' href='/task6'>Task-6</a></li> */}
            <li><a className='dropdown-item' href='/task7'>Task-7</a></li>
            <li><a className='dropdown-item' href='/task8'>Task-8</a></li>
            <li><a className='dropdown-item' href='/task9'>Task-9</a></li>
            <li><a className='dropdown-item' href='/task10'>Task-10</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}
