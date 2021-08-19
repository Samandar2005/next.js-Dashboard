import {useState } from "react";
 const Page404 = () => {
  const [margin, setmargin] = useState(100)

  return(
    <div style={{
      margin: `${margin}px`
  }}>
      <h1>404</h1>
  </div>
  )
 }
 
 export default Page404;