import { useState } from "react"
import { useHistory } from "react-router"
import "../styles/style.css"



function Home() {

  const [name,setName]=useState('')
  const [crushName,setCrushName]=useState('')

  const history = useHistory()

  const getQuote = async (event) => {
    event.preventDefault()
    console.log(JSON.stringify({name, crushName}))
    const req = await fetch("http://localhost:1337/api/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        name,
        crushName
      }) 
    })
    const data = await req.json()
    if (data.status === "ok") {
      localStorage.setItem("userData",data.user)
      history.push("/result")
    } else {
      alert("invalid response")
    }
    console.log(data)
  }

  return (
  <div>
    <main className="bg-overlay">
      <h1 className="title">Welcome to </h1>
      <h1 className="spl__title">crush-fortune</h1>
        <h3 className="guide__title">now lets poke some cupid for fortune! </h3>
        <form onSubmit={getQuote}>
          <label for="name">enter your name :</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required />
          <label for="crushName">enter your crush name :</label>
          <input
            type="text"
            id="crushName"
            placeholder="crush-name"
            value={crushName}
            onChange={(e)=>{setCrushName(e.target.value)}}
            required />
          <button type="submit" className="index__btn">Let's Check</button>
        </form>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio labore facilis molestias aliquam et eius dolores animi quas officiis.</p>
      </main>
  </div>
  );
}

export default Home;
