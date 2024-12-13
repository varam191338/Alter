import {Component} from 'react'

import Login from './components/Login'

import './App.css'

const imagesList = [
  {
    id: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpSupiI7Tw289HomG-whiYwnXcB15Gb0U0A&s',
    altText: 'lotus',
  },
  {
    id: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfQk8UdhPTqVpS_Pa9dQob1RlX8bWdsA5wQ&s',
    altText: 'nature',
  },
  {
    id: 3,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZD2w7-NoyykNKmdcH4u-p5wmw5JDz0FpAg&s',
    altText: 'moon',
  },
  {
    id: 4,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRRC0Kv3TGt6yXnJ2t2zmlrDXypTzD2IyCw&s',
    altText: 'sun flower',
  },
  {
    id: 5,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOgm_ALAusyAqFppZ2JIZODlWwP0FP-8VDA&s',
    altText: 'sunrise',
  },
  {
    id: 6,
    imageUrl:
      'https://img.freepik.com/premium-photo/beautiful-butterfly-with-wild-flower-chamomile_756748-1593.jpg?semt=ais_hybrid',
    altText: 'butterfly',
  },
  {
    id: 7,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnvU01R6kJBDZ6uNBeuJNCI4dJf_3mNk9Gw&s',
    altText: 'sunset',
  },
  {
    id: 8,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWynlnNuM5aDa0QsGr2EnhBPCCYlbexLs9A&s',
    altText: 'peacock',
  },
  {
    id: 9,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpcG9buL-saqXKDaoJzwLRAuGJYmQF5o0nw&s',
    altText: 'flower',
  },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <ul className="list-container">
          {imagesList.map(eachItem => (
            <Login details={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <div>
          <h1>Vibesnap</h1>
          <p>Moments That Matter, Shared Forever</p>
          <button type="button"> Continue With Google</button>
        </div>
      </div>
    )
  }
}

export default App
