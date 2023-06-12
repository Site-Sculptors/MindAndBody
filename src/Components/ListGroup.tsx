import { useState } from "react";
import { ListGroupProps } from "../Interfaces/listgroup.interface";


const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h5>{heading}</h5>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group my-3 cursor-pointer" >
                {items.map((item, index) => (
                    <li className={
                        selectedIndex === index ? "list-group-item active" : "list-group-item"
                    }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </li>
                ))}

            </ul>
        </>
    )

}

export default ListGroup;