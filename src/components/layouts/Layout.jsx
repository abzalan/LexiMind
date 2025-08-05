import React from 'react'

export default function Layout(props) {
  console.log(props)
  const { children } = props
  return (
  <>
    <header><h1 className="text-gradient cursor-pointer">LexiMind</h1></header>
    
    <main>{children}</main>
    
    <footer>
      <small>Created by</small>
        <a targer="_blank" href="https://github.com/ApzHuss">
        <p>© Apzhuss</p>
        <i className="fa-brands fa-github"></i>
        </a>
      </footer>  
      </>
  )
}
