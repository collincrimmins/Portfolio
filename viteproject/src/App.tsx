//import { useState } from 'react'
import './App.css'

import database from './assets/database.png'
import adduserimg from './assets/add user.png'
import img3 from './assets/code controller.png'
import img4 from './assets/code services.png'
import img5 from './assets/Tweets.png'

function App() {
  

  return (
    <>
      <div className="main">
        <div>
          <div className="textinfo">Portfolio</div>
          <div className="textinfo">Collin Crimmins</div>
        </div>

        <div>
          <div className="textskills">
            <b>Languages:</b> Java | JavaScript & TypeScript | Python | C# | Lua | HTML | CSS | SQL & noSQL
          </div>
          <div>
            <b>Frameworks:</b> ReactJS (Frontend) | Spring-Boot w/ Java (Backend) | Git (Version Control)
          </div>
        </div>

        <div>
          Github: https://github.com/collincrimmins
        </div>

        <div className="Header">Twitter Website / User Management Website</div>
        <div className="showcase">
          <div>
            Uses Springboot (Java) for Backend, with Typescript React for Frontend, and SQL for Database
          </div>
          <div className="notes">
            Frontend - Tweets Page
          </div>
          <img src={img5} className="images"/>
          <div className="notes">
            Frontend - Edit Users Page
          </div>
          <img src={database} className="images"/>
          <img src={adduserimg} className="images"/>
          <div className="notes">
            Spring Server - for Controller API's
          </div>
          <img src={img3} className="images"/>
          <div className="notes">
            Spring Server - Retrieve User data from SQL Database
          </div>
          <img src={img4} className="images"/>


        </div>

      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Portfolio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
