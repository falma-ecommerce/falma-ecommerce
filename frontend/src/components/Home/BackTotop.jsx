import {useState,useEffect} from 'react'

const BackTotop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else
             {setBackToTopButton(false)}
        })
    }, [])
     
    const scrollUp=() =>{
        window.scrollTo =({
            top:0,
            behavior: 'smooth'
        })
    }

  return (
     
    <div>
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom:"150px",
                height:"50px",
                right:"50px",
                width:"50px",
                fontSize:"50px",
            }}
            onClick={scrollUp}
            >
                 ^ 
            </button>
        )}
    </div>
  )
}

export default BackTotop