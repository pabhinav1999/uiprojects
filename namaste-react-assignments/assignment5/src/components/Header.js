import appImage from "../../../images/Swogato.jpg";

const HeaderComponent = () => {
    return (
        <>
         <div className="logo">
            <img className="image-adjust" src={appImage} alt="swogato"></img>
         </div>
         <div className="App Name">
            <h1>Swogato</h1>
         </div>
         <div className="navBar-Buttons">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">User</a></li>
            </ul>
         </div>
        </>
    )
   }

   export default HeaderComponent;