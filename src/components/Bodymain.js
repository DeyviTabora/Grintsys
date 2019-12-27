import React from 'react';
import phone1 from '../phone1.png';
import Android from '../icons/android-white.png';

class Bodymain extends React.Component{
    render(){
        return(
            <div id="cont-body">
                <div id="cont-row" className="row">
                    <div id="Textbodymain" className="col">
                    <h2 id="text1">Nosotros llevamos tu negocio al siguiente nivel!</h2> 
                    <p id="text2">Quieres agilizar tu equipo de ventas, cobros y ademas organizar tus procesos internos? 2$HOP se conecta con sus sistemas integrados SAP y RMS.</p>
                    <a id="btn-store" href="#" className="btn btn-primary btn-lg"><img className="icon-android" src={Android} alt="shopping"/> Android Store</a>

                    </div>
                    <div id="body-img" className="col">
                    <img id="bodyimg" src={phone1} alt="2$hop ecommerce platform"/>    

                    </div>
                </div>

            </div>
            
                    
        )
    }
}
export default Bodymain;

