import React, { useState } from 'react'
// import Clock from './components/Clock'
// import Blog from './components/Blog'
import Search from './components/Search'
// import Form from './components/Form'
import List from './components/List'

function App() {

  const [search, setSearch] = useState()

  const HandleSearch = (e) => {
     return setSearch(e.target.value)
  }

  const post = [


    {
      id: 1,
      title: "Hello world",
      content: "Welcome to learning ReactJS"
    },
    {
      id: 2,
      title: "Intiliaztion",
      content: "Welcome to learning ReactJS"
    },
    {
      id: 3,
      title: "Musaib",
      content: "Welcome to learning ReactJS"
    },
    {
      id: 4,
      title: "RaectJS",
      content: "Welcome to learning ReactJS"
    },
    {
      id: 5,
      title: "ReactJS",
      content: "Welcome to learning ReactJS"
    },
    {
      id: 6,
      title: "NodeJS",
      content: "Welcome to learning ReactJS"
    }
  ]

  const Filterout = post.filter((x) => {
   x.title.toLowerCase().includes(search)
  })


  return (
    <div>
      <Search Search={Search} HandleSeacrh={HandleSearch}></Search>
      <List list={Filterout}></List>

    </div>
  )



}

export default App