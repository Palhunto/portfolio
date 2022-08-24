import { useState, useEffect } from 'react'
import './styles.css';
import  {Card}  from '../../components/Card';

/**
 * The App function returns a h1 element with the text "Lista de Presença"
 */
function Home() {
/* Creating a state variable called studentName and a function to change it called setStudentName. */
  const[studentName, setStudentName] =useState();
  const[students, setStudents] =useState([]);
  const[user, setUser] =useState({ name: '', avatar: ''});

/**
 * The function handleAddStudent() is a function that takes in a new student object and adds it to the
 * students array
 */
  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]);

  }
/**
 * UseEffect is a function that takes two arguments: a function and an array. The function is called
 * every time the component is rendered. The array is a list of dependencies. If the array is empty,
 * the function is called only once. If the array is not empty, the function is called every time the
 * component is rendered and every time one of the dependencies changes
 */
  useEffect(() => {
    fetch('https://api.github.com/users/palhunto')
    .then(Response => Response .json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,

      })
    })
  }, []);

  return (
    <div className='container'>

    <header>
    <h1>Lista de presença</h1>
    <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt ="foto de perfil" />
    </div>
    </header>
    <input 
    type='text' 
    placeholder='digite o nome'
    onChange={e => setStudentName(e.target.value)}
    />
    <button type='button' onClick={handleAddStudent}>
      Adicionar
    </button>

    {
      students.map(students => (
      <Card 
        key={students.time}
        name={students.name} 
        time={students.time} 
      />
      ))
    }
    </div>
  )
}

export default Home


