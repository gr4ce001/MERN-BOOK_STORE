import React, { useEffect, useState } from "react";
import Backbutton from "../components/Backbutton";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const Editbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    setloading(true)
    axios.get(`http://localhost:5555/books/${id}`).then((res)=>{
      setAuthor(res.data.author);
      setpublishYear(res.data.publishYear)
      setTitle(res.data.title)
      setloading(false)
    }).catch((err)=>{
      setloading(false)
      alert('An error happened.Please check console')
      console.log(err)
    })
  },[])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setloading(true);
    axios
      .put(`http://localhost:5555/books/${id}`,data)
      .then((res) => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        alert("An error happened , please check console");
        console.log(error);
      });
  };
  return(<div className="p-4">
    <Backbutton/>
    <h1 className="text-3xl my-4">Edit Book</h1>
    {loading?(<Spinner/>):''}
    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">

      <div className="my-4">
        <label className="text-xl mr-4 to-gray-500">Title</label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="border-2 border-gray-500 px-4 py-2 w-full"/>
      </div>

      <div className="my-4">
        <label className="text-xl mr-4 to-gray-500">Author</label>
        <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className="border-2 border-gray-500 px-4 py-2 w-full"/>
      </div>

      <div className="my-4">
        <label className="text-xl mr-4 to-gray-500">Publish Year</label>
        <input type="text" value={publishYear} onChange={(e)=>{setpublishYear(e.target.value)}} className="border-2 border-gray-500 px-4 py-2 w-full"/>
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>

      </div>
  </div>)
};

export default Editbook;
