

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p>Copyrightâ“’ {year}</p>
    </footer>
  )
}

export default Footer;