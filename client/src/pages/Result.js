import React, { useEffect, useState } from 'react'



const Result = () => {

  const [qoute, setQuote]=useState('')


  useEffect(() => {
    const userData = localStorage.getItem("userData") 
    setQuote(userData)
  },[])


  return (
    <div>
    <article className="bg__content">
      <div className="bg-result__overlay ">
        <div className="result__content">
          <h1 className="spl__title top__space">crush-fortune</h1>
          <h3 className="guide__title top__space">guess-what ?</h3>

          <p className="result__para">{qoute}</p>

          <a href="/home"><button className="result__btn" onclick="">try with other</button></a>
          <p className="result__disclaimer">disclaimer!</p>
          <p className="disclaimer__stmt">ithu yaar manathayum pun paduthuvatharku alla</p>
          <p className="disclaimer__stmt">for fun motive only!</p>
        </div>
      </div>
    </article>
    </div>
  )
}

export default Result;
