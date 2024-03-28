import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
function Navbar() {
  const menuList = [
    '여성',
    '남성',
    'Divided',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성'
  ]
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate("/login")
  }
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>

      </div>

      <div className="nav-section">
        <img width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4duXk2YsS37K_BZIt-J309pv0dddd-_Ch1373Ha9cVQ&s" />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='검색어를 입력하세요' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
