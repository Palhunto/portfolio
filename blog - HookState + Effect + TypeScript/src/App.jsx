import { useState } from 'react'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

// author: {avatar_url: "", name: "", role: "" }
// publisedat: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Zewraper.png',
      name: 'Paulo Rodrigues',
      role: 'Chefão'
    },
    content: [                
      {type: 'paragraph', content:'Fala galeraa' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-09 22:19:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/palhunto.png',
      name: 'Gustavo Palhares',
      role: 'Chefinho'
    },
    content: [                
      {type: 'paragraph', content:'Fala galeraa', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-07 22:19:00'),
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App
