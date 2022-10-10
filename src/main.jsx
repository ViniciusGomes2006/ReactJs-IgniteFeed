import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './content/Header'
import { Sidebar } from './content/Sidebar'
import { Post } from './content/Post'


import './style/global.css'
import style from './main.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <div className={style.container}>
        <Sidebar />
      <main>
        <Post 
          name="Vinicius Gomes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dicta? Quos rem consequatur sunt alias. Officia libero maxime voluptatem temporibus perspiciatis ut fuga illum odio labore, quam ducimus veniam esse."
        />
        <Post 
          name="Vinicius Gomes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dicta? Quos rem consequatur sunt alias. Officia libero maxime voluptatem temporibus perspiciatis ut fuga illum odio labore, quam ducimus veniam esse."
        />
      </main>
    </div>
  </React.StrictMode>
)
