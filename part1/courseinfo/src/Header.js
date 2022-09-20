/*
Otra forma de crear componentes cuando son de una sola linea y no se requiere tanto scope

const header = ({course}) => <h1>{course}</h1>

*/

const Header = (props) => {
    return <h1>{props.course}</h1>
  }

export default Header