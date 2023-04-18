
function Topbar() {
  return(
    <div className="topbar container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Mario World</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link" href="/CharacterMain">Characters</a>
          <a className="nav-link" href="/Games">Games</a>
          <a className="nav-link" href="/CommentsBoard">Comments</a>
        </div>
      </div>
    </nav>

   </div>

  )
}

export default Topbar;
