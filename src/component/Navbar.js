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
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url를 바꿔준다.
      let keyword = event.target.value;
      navigate(`?q=${keyword}`)
    }
  }
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className='login-text'>로그인</div>
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
          <input type="text" className="menu-search-text" OnKeyPress={(event) => search(event)} placeholder='제품 검색' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
