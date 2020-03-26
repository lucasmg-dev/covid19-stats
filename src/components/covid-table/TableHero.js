import React from 'react'

const TableHero = ({ data }) => {
  
  const getTotal = field => {
    return data.reduce((acc, el) => {
      return acc += el[field]
    }, 0)
  }

  return (
    <section class="hero is-info" style={{ margin: '40px auto' }}>
      <div class="hero-body has-text-centered">
	<div class="container">
	  <div class="columns">
	    <div class="column">
	      <h2 class="is-size-4">Confirmados</h2>
	      <h3 class="is-size-5">{getTotal('confirmed')}</h3>
	    </div>
	    <div class="column">
	      <h2 class="is-size-4">Recuperados</h2>
	      <h3 class="is-size-5">{getTotal('recovered')}</h3>
	    </div>
	    <div class="column">
	      <h2 class="is-size-4">Fallecidos</h2>
	      <h3 class="is-size-5">{getTotal('deaths')}</h3>
	    </div>
	  </div>
	</div>
      </div>
    </section>
  )
} 

export default TableHero
