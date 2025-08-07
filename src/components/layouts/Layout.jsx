export default function Layout(props) {
  console.log(props)
  const { children } = props

  return (
  <>
    <header>
    <h1 className="text-gradient">
    LexiMind</h1>
    </header>
    <main>{children}</main>
    <footer>
      <small>Created by</small>
        <a target="_blank" 
        href="https://github.com/ApzHuss/LexiMind">
        <img alt="pfp" 
        src="https://avatars.githubusercontent.com/u/124435563?v=4" />
        <p>@Apzhuss</p>
        <i className="fa-brands fa-github"></i>
        </a>
      </footer>  
      </>
  )
}
