import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialMedia() {
  return (
    <div className='mt-5 '>
    <Link to="https://www.facebook.com/aboodsyr.khademaljamaeh" target='_blanck'><i className="mt-5 fa-brands fa-facebook fa-lg text-color"></i></Link>
      <i class="mt-5 ms-3 fa-brands fa-whatsapp fa-lg text-color"></i>
      <i class="mt-5 ms-3 fa-brands fa-github fa-lg text-color"></i>
      <i class="mt-5 ms-3 fa-brands fa-instagram fa-lg text-color"></i>
    </div>
  )
}
