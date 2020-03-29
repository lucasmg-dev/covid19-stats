import React from 'react'

const TableHero = ({ data }) => {
  const getTotal = field => data.reduce((acc, el) => (acc += el[field]), 0)

  const mortality = getTotal('deaths') * 100 / getTotal('confirmed')

  return (
    <section className='hero is-info' style={{ margin: '40px auto' }}>
      <div className='hero-body has-text-centered'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <h2 className='is-size-4'>Confirmados</h2>
              <h3 className='is-size-5'>{getTotal('confirmed')}</h3>
            </div>
            <div className='column'>
              <h2 className='is-size-4'>Recuperados</h2>
              <h3 className='is-size-5'>{getTotal('recovered')}</h3>
            </div>
            <div className='column'>
              <h2 className='is-size-4'>Fallecidos</h2>
              <h3 className='is-size-5'>{getTotal('deaths')}</h3>
            </div>
            <div className='column'>
              <h2 className='is-size-4'>Mortalidad</h2>
              <h3 className='is-size-5'>{mortality.toFixed(1)}%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TableHero
