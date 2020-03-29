import React, { useState, useEffect, useRef } from 'react'
import { getData } from '../../api/http'
import { formatData, sortBy, filterData } from '../../api/utils'
import TableHero from './TableHero'
import TableTitle from './TableTitle'
import TableList from './TableList'
import TableSearch from './TableSearch'

const CovidTable = () => {
  const [list, setList] = useState([])
  const [currentSort, setCurrentSort] = useState('confirmed')
  const [currentOrder, setCurrentOrder] = useState('desc')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const originalData = useRef([])

  function handleSort (key) {
    if (key === currentSort) {
      setList([...list].reverse())
      currentOrder === 'asc' ? setCurrentOrder('desc') : setCurrentOrder('asc')
      return
    }
    const sortedData = sortBy(list, key, 'desc')
    setList(sortedData)
    setCurrentSort(key)
    setCurrentOrder('desc')
  }

  function handleOnChange (value) {
    setSearchQuery(value)
  }

  async function fetchData () {
    const data = await getData()
    const formattedData = formatData(data)
    originalData.current = formattedData
    const sortedData = sortBy(formattedData, currentSort, currentOrder)
    setList(sortedData)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (loading) return
    const filtered = filterData(originalData.current, searchQuery)
    setList(filtered)
  }, [searchQuery])

  if (loading) {
    return <p className='text-center'>Cargando...</p>
  }

  return (
    <>
      <TableHero data={originalData.current} />
      <TableSearch value={searchQuery} handleOnChange={handleOnChange} />
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <TableTitle field='country' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title='País' />
            <TableTitle field='confirmed' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title='Confirmados' />
            <TableTitle field='recovered' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title='Recuperados' />
            <TableTitle field='deaths' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title='Fallecidos' />
            <TableTitle field='mortality' handleSort={handleSort} currentSort={currentSort} currentOrder={currentOrder} title='Mortalidad' />
          </tr>
        </thead>
        <TableList data={list} />
      </table>
    </>
  )
}

export default CovidTable
