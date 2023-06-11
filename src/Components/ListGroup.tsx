import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h5>{heading}</h5>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group my-3" >
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