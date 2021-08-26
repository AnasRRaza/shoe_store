import React from 'react'

const Footer = () => {

  let year = new Date().getFullYear()

  console.log(year)
  return (
    <div className="cont">
      <div className="footer">
        <h3>Copyright &copy; Anas Raza {year}</h3>
      </div>
    </div>

  )
}

export default Footer;
