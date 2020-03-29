import React from 'react'

export default ({ value, handleOnChange }) => (
  <div className='container' style={{ marginBottom: 40 }}>
    <div className='columns is-desktop'>
      <div className='column is-half is-offset-one-quarter'>
        <div className='field has-addons'>
          <div className='control' style={{ width: '100%' }}>
            <input className='input' type='text' placeholder='Filtrar por país' value={value} onChange={(ev) => handleOnChange(ev.target.value)} />
          </div>
          <div className='control'>
            <a className='button is-info'>Filtrar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)
