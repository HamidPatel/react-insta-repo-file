import React, { useContext } from 'react'
import "./Profile.css"
import { FaRegPlusSquare } from "react-icons/fa";
import { MdLineWeight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FirebaseContext, useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';
export default function ProfilePage() {

    const firebase = useFirebase();
        const showBtn = () => {
            let con = document.querySelector("#con")
            con.classList.toggle("hidden")
        }
        const navigate = useNavigate()
        const LogOut = () =>{
            navigate("/")
        }
   
  return (
    <section>
        <nav className=''>
            <div className="nav-icons flex items-center justify-around">
                <div className="nav-left">
                    <div className="insta-logo">
                       <span className='text-xl'>user</span>
                    </div>
                   
                </div>
               <div className="nav-right flex items-center text-2xl gap-3 relative">
                <div className="hidden w-[30vw]" id='con'>
               <div className='absolute right-0 bg-white  top-6 h-[46vh] m-2 border w-[80vw] flex flex-col'>
               
                <button  className='p-5 text-xl text-left'>Settings and Privacy</button>
                <button  className='p-5 text-xl text-left'>Threads</button>
                <button  className='p-5 text-xl text-left'>Saved"</button>
                <button  className='p-5 text-xl text-left'>Favorites</button>
                <button 
                onClick={LogOut}
                className='p-5 text-xl text-left'>Log Out</button>
               </div>
               </div>
               <span className='text-2xl'><FaRegPlusSquare /></span>
               <span  className='myBtn' onClick={showBtn}><MdLineWeight /> </span>
            </div>
           
            </div>

        </nav>
        <div className="profile">
            <div className="left-profile">
                <div className="propic">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUZGRgYGBgaGBkYGBoYGBkYGhgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND81NDE0NDQ0MTQ0NDw0NP/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABCEAACAQIDBQUFBgIHCQAAAAABAgADEQQhMQUSQVFhBiJxgZETMlKhsQdCYnLB0RSyI0OSouHw8SQzRFNjc6PD4v/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAIREBAQEBAAMBAAMBAQEAAAAAAAECEQMSITEiQVETYQT/2gAMAwEAAhEDEQA/AOzQhCAQhCAQhCAQhCAQhMXaG36aXVO+3IHug9W/a8DZmdjds0aWTOL/AAjvN6DTznkMZtatV3gzFV+FMh58T5mYjmXnHUXXHr8T2yX+rpE9XIX5C/1lF+1NdtCi/lW/8xM84qxCSJ09Mp9q16228Qf65vIKPoJVO2sR/wA9/wC0YxGD5aGVqiWnP+18+di8O0GJXSs3mFb6iWaHa/ErqUf8yW/lImE0QCbZCdezwfbYHKpRI6o1/wC61vrN3BbdoVMlqANybunyvkfKczRbRbSeRrsEScy2ftqtRsFY7vwt3l9OHlaes2Z2op1LLU/o26nuk9G4efrMuTr0UIgMWY0QhCAQhCAQhCAQhCAQhCAQhCAQhCAStjMWlNSzmwHqTyA4mQ7T2itBd5syfdUak/oOZngNo7Qeq28552A91RyAmydZbxobY7QPVuqncTkPeb8x/QfOY6VLSJmEaJ1mZI53X1aStbOQVGubxAI9UvHyF7Uax1SAFjAmKcAFs44veRlo5BMsVKjdJGozlxaV87EiV2QAyOr5S2jt2LSHASY4cj3+704x2QuarhCchECRzvY90yL2nCV9T8jZ2Pt6pQst99PgPD8h4eGk97gsYlVA6nI8DkR0InKN6X9nbVqUiN1s+vEfCeYk6hK6lCZmx9qrXW4yYe8vLqOY6zTkqEIQgEIQgEIQgEIQgEIQgEp7Sx60ULtwyA4seAEsO4AJJsACSToANSZ4DbO0TXqE6Itwg6fERzP7QK2MxrVXLsbk6Dgo4KOkp1TeK4iEzpE1HuQ3ZIl4Ouc3qeBesRgYqoTFHKZ1vEbRbxxEbabacMj9/LSPCyNpnei2uJG4FAseJ5ym4js4NJ9Z1fteGo1tJpYYipcu3ujTnMyLTOesaz8M65UmJpcQMjpKjC01sZVUWCZiwzmdVa8jOtc+q1M9Rot49qe6ZXN5KH5y+p4tYLHPTYOhsRpy6g8xOj7J2itdAwyYZMvFW/bkZzJHy/WXdlbYajUD6jRx8S/uOElrqMJFQrK6h1N1YAgjiDJYYIQhAIQhAIQhAIQkOIrBEZzoqlj4AXgea7X7T3QKCnNs36LwXz18B1nlEMTFYlqju7auxJ6cgOgFh5RqCT1XOJSYx44mNAnTNRqEuYXkiDOPZIup+MmfiIMY9SBrF3Yhmdbww2MaQINEJlSMtOa0ZaIIXmycZ0/fgBEEVCQZlCezg9Pzl04ffJYZAcIw4e178NJz/wCrr/zVfZ5axrUzylqnTubXymkuGUrkQcuOsnXk4vOOsMqLe7K5IvL2Lp7uhlDdm5/lOp18+HopPhI3kiiIadzK5xP69d2J2nb/AGdjkbsnQ6sv1PrPaTkGHZkZWU2ZSCD1BynVdn4oVaaVF0ZQfA8R5G48oYtQhCAQhCAQhCAkwO1uItSCX985+C5/W0354ftPi96sycEsvna5+Z+UnVvPisyd+sMUxASxuZSMASc3q9TiK+cWOIgUHMTt1yTJUAtYZwqveRII5pz5Or78MJtG3kxQRrU+UuWIsqExlpN7KKmHJM32kZ62oI9EvLAw9uvQRpEn37+K9eIfZxUMAbSZALSus4FqMvnI6tQtBzGKJGs9+qmrzhto9WOtzGmOQTPU7THz1kBSX92+Uj9lNnwv1Aix/u53kpS0a1K/GOsQnPPjPadjMUSjUyPdO8tuRyYetj5zyAoETU7PVymIQ3sGO4eu9kPnb0gdDhCE1ghCEAhCEAnL8W++7vf3mZvUkzo+Ofdpu3JGPopnNBMrYkRoGQmSIw4wq3pJIgFxfTjGAXi2mW/GRoYfCq190gnkZVNM3taQ7x4SRS2uvjJks/tVsv8ASxh6IJ7wJ8JJj8Kq+6TIv4txxykr492FtPLWRZr26qXPOKIMcwNso9Bc2mulIImYBje5KZz2MMORxjCZcxTgmwWUylp0zZUazYRgdbR4EdwjS/KVKmo2EcNNIjGRO9uM20kTinC0onEtzk9Gpc94+YEi/GyJiZGzxSvpGSs2Mso9pHZyNnkZrzf1K2XIEjNQghtCMx4jSQe06xyW1vMb9dYpVAyqw0YAjwIvJJQ2HU3sPSP4FHoLfpL80EIQgEIQgUNtG1Cr/wBtvpOczo+2Vvh6o/6b/wApnNTe+UmtiUCN3Y9VjgkzquBSI8WkW7HXMH4duyW0hVzDejh09zIy8eSJUxuMp0l3ncKOup8BxmwWLyR8Q7cTlPEYztuASKVO4+JyRfyETC9tiSA9NbfhJv8AOZZ39JbPx7lMRlmAfr6zC292hp4c7pBZyLhByOhZuAmrRcOiuhurAEHoZ5btxswuqVrZp3W/KdPQ/WZmzqr7cbWxNsriE3hZW+8l7lc9fAy8c5y7Z+MbD1FdeGo5jiJ1PC4gPTVksVcBhp6HrK1eJk6YAZE6S6KUhxFhwv1ky9PVW9iOccFUSu9SR+0lcFg1M7Xk9Kl1HnKW/wAZItWZZ8Jf9LVEqsc5K7mQMs2Wwshfa2j0eQlY4CayOq9mDfDU/Bv52mtMbsotsJS8GPq7H9ZsxPxIhCE0EIQgQYqnvI6/ErD1BE5etYWE6tOU7VwpStUXQK7W8L3X5ESNKyVsRaNOJvkJVRY9KRmdXxbSrJVN43Bp8WkmdQCSpteRdKmaYcpG1VRrFZLypVpmbNHrWV2l7RCgm6g77e7fMKPiM53isU7tvOxZjxMl21ii9d2J+8QOgGUokztmfHK36feLeMBigzGuhdgdsgj2FRgBbuEnT8E9Ptykz0XRFVywsQ5Ki3MEcROQYZ7TrHZbECvhlZ2O8Lowte5Gl/EGctSZ/k65vZ6uW4wMGKkAFSQQDfMa58Z6vsNjiGag3ukFl6Ee8POXtvdkUbeqULq277gA3WIzPgZ5LZOKNKsjnLdazeGjX+cqamp8Rc3NdVJ5GMIU5HTnL2Gwqst7g3GVjz0PWQV8KwyC5cxxnGeTP51dxf1j4ihY5ZiMNEnQTTbDkajKRPRle/8A6TH+s5qLDWJaXkpSN8ObzZsuVW0eKN+MkqU7SHeInTscqVaEaaUkUy1gSWdFAuWZVF/xG36wOk7FpbuHpLxFNL+O6CfnL8aBbKOloEIQgEIQgJPG9qsCPah+DKP7S5H5bs9lMjtJhd+iSNUO95D3h6Z+Ujc7Pi/HZNTrxKYUA3jnSX8Oist4xqc8s8j1XH1RNP0jkQywy9LxpY20tHbfw+Q9aN+Mjr0QA3EhT9Ib99ZHUc7p8D9JvKzscOqHM+J+siMnxAszeJ+shYT1z8eW/tIDJEaRQvAtU+U6h9l5cLUDIdw2ZWIIBbQgE65fScvwjAsLm1sweozF/Odx2fiy9FHvYMinoMrzj5u3Pr/rr4/3rbpoOGXHrOddvezBUvi6WYJvUTlwLrzHOetFU5ENfz1jqrlwVb3SCCOBB1BnnxjWb3rrqzTzH2e7XFQfw7t3kF0ufeTit+k947rpfT1nFNp4Z8JibKSN1gyNzXh+xnRNkbVXEU1dcjoy/C0vfhlvsjPk58b9WsLWtrpxjErhcmGXgJnMx1vFRWY5X6zP+Un6r3rRNZXbdVR4mwkeLw5Gg3uZFpVSm4vYG3O0noVnGViQeYkWc+xsvflZ1YgX4eMpMgOk3amDDd4EDp/rIW2aeAt1vLz5ZGXHWJuec3OyWFL4hTbuoCx8dF+Zv5Ss+DKmxHznr+y+DC0y9rFz/dW4HzuZ2xv2vxy3n1jehCE7uIhCEAhCEAjSL5R0IHgcdhjQqMn3dU6qdPTTygXFhn6T0faTZ5qU95Bd0uQPiHFf1HUdZ4tGY8J5t4kr0Y3bGkuMI4A+UbVdW1y8JUF5MjC2k53Mi5aYVBjHoixz4SyhHSR4jMAAZnThYc5vTjh2PW1Rxyd/qZVaXdqL/S1Pzv8AzGUWnqz+PNSRDFhNAhtLY2jVC7vtH3dN3eNrcrSpCZxrV2dt2tSYFKjC1hYm6kDgQeE6L2c7VpiLI9kqcr91/wAvXpOSx6OQQQSLcRr4zNZlJqx1ntnsv2tDfUXendhzK/eHpn5TxXZ7bDYeoG1Q2DrzHMdRN7sx2yVlFLEkA6CodCOT8vGeb2zhBSruikFL7yEEEFGzFiOmXlIk/qqv+x1fDurqrqbqwBBHEGWUwrag28SBPD9gdp3Y4Z2yN2Qk6Ear56+s901DqPWcd/LxeZ2dS0Uqg6gj8wtLLYlV961+mcztwjj6Ru4L5TlqSun40kxStnu+oP6Rv8ZnYADxOXleUyWUa5dDlIyL5zPSUta2F3KrBeLdNBxN56qkgAAAsAAB4DSY/Z7Z+4u+R3mGXRf8dfSbc9ni8czO/wCvP5Ne1LCEJ2cxCEIBCEIBCEICTyPaLZhVvaKO4x7wA91jx8D9fKeujKlMMCCLgixHMSdZ7OKzrlc9AI1H6RSOQku29mVqL3Vi1NvdJzI/C3XrxlSg9S+ec8tly7yzSdEPFTaQY3EhEermNxWOeegytLavfXLznlu3WNKUNxbd73vAcPW0mS6q7yRy2s5YknUkk+ZvITHMYy89ry0sUARojrc4CCLuwyjgYDSsN2TooOs9unYJXoipRrlnKhlRlAB5rvDQybqZ/WzNv48IJYw7Z56R1fCsjFHUq6mzKRYg+E0qvZ7EoAWw9QAgEHcJFjppeOwiLDVCjq6HNWDDyM7Fs/FpVpJUUHvrci+h4jyM43SwlQsFCOSeARr+lp1/sfsp6GGVKxCsWZt057obgevGefzc511xU++L8flDd6fOXamDQ8Vipg0AzN/Sef2468UppbF2f7Rt4juKc/xH4fDnJMLs32jC2Sg94j6eM9NRoqqhVFgNBPR4c+38r+OPk1z4kiwhPW4CEIQCEIQCEIQCEIQCEIQIqtMMCpFwciDPH7W2VUoksrFqR1+Jeh6dZ7SIZGszUVnVzfjmdaqlu6DfiSbzxnbequ4cs+6oPU95v0nWdr9l1a7UrKdSmin8p+74aeE5B29w7J3WVkbf91ha/C45iw16zhnHrqddvf2zePDExscREtPS4mx5EZFtAI8GRxymBOhnYOwOL3sKoFt5Cynnrl5Tj9OdH+zTEdyohF7OLeY/cfOcPNP4uviv8nqsVsqi9UVnpK1QWsx6aEjQkdZopimHE+sj3jyGcHBH3QJ5vd19YGqk5mI3+kmosD91Y7eYkBUF+AAuZN1bT1iBaV5ewGyWqG5uq8Tz6LNLAbKPvVAAfhB/mP6CbQFtJ38fht+6ct+ST5lHh6CooVRYD/NzJYsJ658cBCEJoIQhAIQhAIQhAIQhAIQhAIQhAJm7Y2LQxSezxFJai6je1U6XVhmp6giaUIHGu0P2OsLtgqwI19nWyPgtRRn4MPOc22z2fxOGNq9B6f4mW6HwdbqfIz6ujCoIsRcHgc5nG9fH14T6c2p2C2dXN6mFQNrvU70jfmdwi/neeYxn2M4Rr+zr16fIEo6jwBUH5xw64WYl51LaP2R+zJtjL6a0M/X2kxG7AG9v4n/xf/ccb145HnQ/svclqyjXdQ/MybZ/2S+0/wCMtnb/AHF//ZPc9lfs3pYMs3t6jllAI3UVcjfSxPznPyZtzZFY1M67VkK1rm36/SS0qLN7o3ueV/8AATfobOpA23b/AJiW+RylwC08+f8A5b/ddNeef1GFh9is2dQgdF19eHzmxhsMqCyi3XUnxMnhPTjxZz+Rxu7r9LCEJ0SIQhAIQhAIQhAIQhA//9k=" alt=""/>
                    <div>User Name</div>
                </div>
               
            </div>
            <div className="right-profile">
                <div className="hendelinfo">0
                    <div>Posts</div>
                </div>
                <div className="hendelinfo">41
                    <div>Followers</div>
                </div>
                <div className="hendelinfo">78
                 <div>Following</div>
                </div>
               
            </div>
        </div>
        <div className="profile-options">
            <div className="btn">Edit profile</div>
            <div className="btn">Share profile</div>
            <div className="btn"><CgProfile /></div>
        </div>
        <div className="highlights">
            <div className="left-high">
                Story highlights
        </div>
            <div className="right-high">
                <i className="ri-arrow-down-s-line"></i>
            </div>
        </div>
        <div className="unkown">
            <div className="left-unkown">
                <i className="ri-gallery-view-2"></i>
            </div>
            <div className="right-unkown">
                <i className="ri-account-box-line"></i>
            </div>
        </div>
        <div className ="mypost"></div>
       
    </section>
  )

}
