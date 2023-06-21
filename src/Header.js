import "bootstrap/dist/css/bootstrap.css";
import "./Header.css"

function Header() {
  return (
    <div className="container-plug">
      <ul className=" ul d-flex text-info bg-secondary fw-bolder btn  outline justify-content-end gap-4  display-6 btn">
        <li style={{backgroundColor:"yellow"}}>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>REACT</li>
      </ul>
    </div>
  );
}


export default Header;