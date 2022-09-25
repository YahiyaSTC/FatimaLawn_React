import React from 'react'

function Header() {
  return (
    <div className="head p-2 pb-0 d-flex align-items-center justify-content-between border-bottom">
    <h2>Admin Panel</h2>
    <div className="d-flex align-items-center gap-2">
      <i class="fa-solid fa-user"></i>
      <p className="m-0"> Muhammad Yahiya</p>
    </div>
  </div>
  )
}

export default Header