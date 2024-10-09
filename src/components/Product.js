import React from 'react';

const Producto = () =>{
    return(
        <div style={styles.contenedor}>
            <form>
                <div style={styles.contenedor2}>
                <h2 style={{textAlign: 'center', color:'#5f9ea0'}}>Publish Product</h2>
                <input style={{borderRadius: '5px', margin: '5px', marginBottom:'30px', height: '5vh'}} type="text" id="nombre" name="nombre" placeholder="Name"/>
                <input style={{borderRadius: '5px', margin:'5px', marginBottom:'30px', height: '5vh'}} type="text" id="precio" name="precio" placeholder="Price"/>
                <select style={{borderRadius: '5px', margin:'5px', marginBottom:'30px', height: '5vh'}}>
                    <option value="1" >Category</option>
                    <option value="2" >Service</option>
                    <option value="3" >Food</option>
                    <option value="4" >Technology</option>
                    <option value="5" >Guns and other</option>
                </select>
                <textarea placeholder="Description" style={{borderRadius: '5px', margin:'5px', marginBottom:'30px', height: '10vh'}}></textarea>
                        <div style={{borderRadius: '5px', margin: '2px', width:'50', height:'100', marginBottom:'30px', height: '5vh'}}>
                            <span style={{borderRadius: '5px',  justifyContent: 'space-around', marginBottom:'30px', height: '5vh'}}>No file selected</span>
                            <button style={{borderRadius: '5px', height: '3vh', marginLeft:'80%', borderColor:'black', borderWidth:'2px'}}>
                                <image src="" style={{borderRadius: '5px', height: '3vh', marginLeft:'100%', width:'50' }}></image>
                            </button>
                        </div>
                        <button style={{borderRadius: '5px', height: '5vh', backgroundColor:'#5f9ea0'}} >POST</button>
                        </div>
            </form>



        </div>
    );
}

const styles = {
    contenedor: {
    backgroundColor: '#ffffff',
    width: '60',
    height: '80vh',
    margin: '40',
    borderRadius: '15px',
    padding:  '60px',
    display: 'flex',
    flexDirection: 'column'

    },
    contenedor2: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent:'space-around',
    padding: '20px',
    }
    
}
export default Producto;