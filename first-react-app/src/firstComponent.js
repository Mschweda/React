import React from 'react';
function FirstComponent(props){
    console.log("This is first component props***", props.items)
    return (
    <div>
        <h1>Marisa's First React ToDo List</h1>
        <ul>{props.items.map((items, index) => {
            return <li key={index}>{props.items[index]}</li>
            })}
        </ul>
    </div>
    )
}

export default FirstComponent;