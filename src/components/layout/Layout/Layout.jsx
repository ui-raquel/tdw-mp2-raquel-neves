function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Studio Ghibli</h1>
      </header>
      <nav>
        <a href="/" >Home</a>
        <a href="/films" >Films</a>
        <a href="/StudioGhibli" >Studio Ghibli</a>
        <a href="/about" >About</a>
        <a href="/animals" >Animals</a>
        <a href="/characters" >Characters</a>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout