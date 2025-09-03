import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductsInfo from '../data/Products'
import { useSearch } from '../context/SearchContext'
import Navbarr from '../components/Navbar'
export default function Home() {
  const {searchTerm}=useSearch()
  const filteredprouducts=ProductsInfo.filter((p)=>p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
    <div>
      {  searchTerm =="" ?
      <ProductCard products={ProductsInfo}/>
      : <ProductCard products={filteredprouducts}/>} 
    </div>
  )
}
