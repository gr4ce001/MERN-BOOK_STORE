import React,{useState,useEffect} from 'react'
import Backbutton from '../components/Backbutton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const Deletebook = () => {
  const [loading, setloading] = useState(false)
  const navigate=useNavigate();
  const {id}=useParams()

  const handledeletebook=()=>{
    setloading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((res)=>{setloading(false);
      navigate('/');
    }).catch((err)=>{
      setloading(false)
      alert('an error happened check console')
      console.log(err)
    })

  }

  return (
    <div className="p-4">
      <Backbutton/>
      <h1 className='text-3xl my-4'>Delete book</h1>
      {loading?<Spinner/>:''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-2xl'> Are you sure you want to delete the book?</h3>

        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handledeletebook}>
          yes, delete it bro
        </button>
      </div>
    </div>
  )
}

export default Deletebook