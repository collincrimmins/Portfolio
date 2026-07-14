//import { useState } from 'react'
import './App.css'

import database from './assets/database.png'
import img8 from './assets/ucf 1.png'
import img9 from './assets/ucf 3.png'
import newimage1 from './assets/newimage1.png'
import newimage2 from './assets/newimage2.png'
import ucfupvote from './assets/ucfupvote.png'

function App() {
  

  return (
    <>
      <div className="main">
        <div>
          <div className="mainheader">Collin Crimmins</div>
        </div>

        {/* <div>
          <div className="textskills">
            <b>Languages:</b> Java | JavaScript & TypeScript | Python | C# | Lua | HTML | CSS | SQL & noSQL
          </div>
          <div>
            <b>Frameworks:</b> ReactJS (Frontend) | Spring-Boot w/ Java (Backend) | Git (Version Control)
          </div>
        </div> */}

        <div className="mylinks">
          <div>
          Github: 
          <a href="https://github.com/collincrimmins"> https://github.com/collincrimmins</a>
          </div>
          <div>
          Linkedin:
          <a href="https://www.linkedin.com/in/collincrimmins/"> https://www.linkedin.com/in/collincrimmins/</a>
          </div>
          <div>
            React Typescript |
            Java SpringBoot |
            SQL Postgres
          </div>
        </div>

        <div className="showcase">

          <div className="notes">
            <div>Full Stack Website Demo</div>
            <div>Deployment to AWS (Cloud) - EC2, S3, RDS</div>
          </div>

          <iframe className="myvideo" src="https://www.youtube.com/embed/NsXlfrG0res?si=fHy8eB5GtENXTUDn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <div className="notes">
            <div>More Images</div>
          </div>

          <img src={newimage1} className="images"/>
          <img src={newimage2} className="images"/>

          <div className="notes">
            <div>Simple CRUD Database Pagination App Demo</div>
          </div>

          <img src={database} className="images"/>

          <div className="notes">
            <div>2022 - 2023</div>
            <div>UCF Chatbot</div>
            <div>(Keyword Querying tool to answer Student Questions)</div>
          </div>

          <img src={img8} className="images"/>
          <img src={img9} className="images"/>
          <img src={ucfupvote} className="images"/>

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
