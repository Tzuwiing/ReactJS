function ItemList(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))} 
        </ul>
    )
}

export default function Ujian2() {
    const fruits = ["apple", "banana", "orange", "mango"];
    return <ItemList items={fruits} />
}
