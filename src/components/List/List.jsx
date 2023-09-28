import Item from "../Item/Item";

function List({ items = []}){
    const map = items.map((item)=> {
        return (
            <Item key={item.id} item={item} />
        )
    });

    return (
        <div>
            <h2> Lista</h2>
            <ul>
                {map}
            </ul>
        </div>
        
    );
}

export default List;