import "./Header.css";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

export default function Header({ sortBy, setSortBy }) {
  const handleClick= ()=>{
    localStorage.clear()
    
  }
  return (
    <header className='header'>
      <Link to='/'>LOGO</Link>

      <div className='flex-row'>
        <Link to={"/account"}>My account</Link>
        <select
          name='price'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value=''>none</option>
          <option value='cheap'>cheap</option>
          <option value='expensive'>expensive</option>
        </select>
        <button onClick={handleClick}>Sign out</button>
        <Cart />
      </div>
    </header>
  );
}
