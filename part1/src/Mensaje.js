// a los componentes le podemos pasar parametros que en react son llamados props
const Mensaje = (props) => {
    return <h1 style={{ color: props.color}}>

      {props.message}
      
      </h1> 
  }

export default Mensaje