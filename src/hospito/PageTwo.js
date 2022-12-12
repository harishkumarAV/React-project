import React from 'react'
import'./Pt.css'

function PageTwo() {
  return (
    <div><h3 className='kh'>BOOK SLOTS :</h3>
    <p className='hk'>(CLICK TO BOOK SLOTS)</p>
    <p className='hk1'>MORNING SLOTS:</p>
    <div className='box1'>
    <button type='boom1'>SLOT 1</button>

    <button type='boom2'>SLOT 2</button>

    <button type='boom3'>SLOT 3</button>

    <br></br><br></br>
    </div>
    <p className='hk2'>EVENING SLOTS:</p>
    <div className='box2'>
    <button type='boom'>SLOT 4</button>

    <button type='boom'>SLOT 5</button>

    <button type='boom'>SLOT 6</button>
    <br></br>
    <br></br>
    </div>
    </div>

  )
}

export default PageTwo