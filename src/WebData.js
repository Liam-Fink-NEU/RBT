import React, {useState, useEffect} from "react";
import {Button} from "semantic-ui-react";

const WebData = () => {
    const [data, setData] = useState("not clicked yet!");

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    function get() {
        const ul = document.getElementById('authors');
        const url = 'https://randomuser.me/api/?results=10';
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                let authors = data.results;
                setData(authors);
                authors.map(function(author) {
                    let li = createNode('li'),
                        img = createNode('img'),
                        span = createNode('span');
                    img.src = author.picture.medium;
                    span.innerHTML = `${author.name.first} ${author.name.last}`;
                    append(li, img);
                    append(li, span);
                    append(ul, li);
                });
            })
            .catch(function(error) {
                console.log(JSON.stringify(error));
            })
    }

    return (
        <div>
            <Button color='blue' onClick={() => get()}>
                Click me for data!
            </Button>
            {JSON.stringify(data)}
        </div>
    );
};

export default WebData;