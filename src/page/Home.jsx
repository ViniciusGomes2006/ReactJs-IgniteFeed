import React from 'react'

import { Header } from '../content/Header'
import { Sidebar } from '../content/Sidebar'
import { Post } from '../content/Post'


import '../style/global.css'
import style from './Home.module.css'

const postJson = [
  {
      id: 1,

      author: {
          name: "Vinicius Gomes",
          rule: "Dev front-end",
          avatarUrl: "https://github.com/ViniciusGomes2006.png"
      },

      content: [
          { type: "paragraph",key:"1", content: "Fala galeraaa 👋" },
          { type: "paragraph",key:"2", content: "Acabei de subir mais um projeto no meu Github. O nome dele é Ignite Feed 🚀" },
          { type: "link",key:"3", content: "github.com/ViniciusGomes2006"}
      ],

      publishedAt: new Date('2022-08-26 13:24:17')
  },
  {
    id: 1,

    author: {
        name: "Mayk Brito",
        rule: "Dev front-end",
        avatarUrl: "https://github.com/MaykBrito.png"
    },

    content: [
        { type: "paragraph", key:"4", content: "Fala galeraaa 👋" },
        { type: "paragraph", key:"5", content: "Acabei de upar mais uma aula na nossa plataforma da RocketSeat 🚀, assista lá caso você ainda não tenha visto !!! 📚" },
        { type: "link",key:"6", content: "github.com/MaykBrito"}
    ],

    publishedAt: new Date('2022-05-11 19:33:47')
  },
]

export function Home() {

  return(
    <>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <main>
          {postJson.map(postInfo => {
            return (
              <Post
                key = {postInfo.id}
                author = {postInfo.author}
                content = {postInfo.content}
                publishedAt = {postInfo.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}