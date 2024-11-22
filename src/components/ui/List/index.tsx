import { Link } from "react-router-dom"

interface ListData {
  name: string,
  url: string 
}

interface ListProperty {
    list: ListData[]
}

export const List = ({list}: ListProperty) => {
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}