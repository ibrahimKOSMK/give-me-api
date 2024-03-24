import React from 'react'

function blogtest(blogs) {
  return (
    <div>
        {blogs.map(item=>(
            
        <div> {item?.Title} </div>
            
           ) )}
      
    </div>
  )
}

export default blogtest
