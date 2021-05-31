import React from 'react'
import "./statistics.scss";

function getRandomColors(){
return {
  background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`};

}

function Statistics ({title,stats}){

  return (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}

  <ul class="stat-list">
    {stats.map((stat)=> (<li class="item" style={getRandomColors()}>

      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li> ))}
   
  </ul>
</section>
  )
}


export default Statistics