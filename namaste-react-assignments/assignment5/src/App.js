    import { respFromApi } from './utils/Restaurant_Constants';
    import ReactDOM from "react-dom/client";
    import HeaderComponent from './components/Header';
    import ContentComponent from './components/Content';
    import FooterComponent from './components/Footer';
    
    console.log(respFromApi);



    const AppComponent = () => {
        return (
            <>
              <div className="header-container"><HeaderComponent /></div>
              <div className="content-container"><ContentComponent /></div>
              <div className="footer-container"><FooterComponent /></div>
            </>
        )
       }

    const root = ReactDOM.createRoot( document.getElementById('foodApp'));
    root.render(<AppComponent />);