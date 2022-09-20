const Content  = (props) => {
    return <ul>
        <li>
        {props.part1},{props.exercises1}
        </li>
        <li>
        {props.part2},{props.exercises2}
        </li>
        <li>
        {props.part3},{props.exercises3}
        </li>
    </ul>
}

export default Content
