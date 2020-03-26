import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const styles = {
  arrow: (active=false) => ({
    color: active ? "#000" : '#ccc',
    cursor: 'pointer',
    fontSize: '6px',
    marginLeft: '.2rem'
  }),
}

const Arrows = ({ currentOrder, currentSort }) => {
  console.log(currentSort, currentOrder)
  return (
    <Fragment>
      <FontAwesomeIcon icon={faArrowUp} style={styles.arrow(currentSort && currentOrder === 'asc')} />
      <FontAwesomeIcon icon={faArrowDown} style={styles.arrow(currentSort && currentOrder === 'desc')} />
    </Fragment>
  )
}

export default ({title, field, handleSort, currentSort, currentOrder}) => (
  <th onClick={() => handleSort(field)}>{title} <Arrows currentSort={currentSort === field} currentOrder={currentOrder} /></th>
)
