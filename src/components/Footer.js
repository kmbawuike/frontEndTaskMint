import React, {Fragment} from 'react'

const Footer = ()=>{
  return(
    <Fragment>
      <footer className="footer-container">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="pagination">
          <a href="#">Previous</a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">Next</a>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;