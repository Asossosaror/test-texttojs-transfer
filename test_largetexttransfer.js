fetch('Test - Längd sammanfattning.txt')
    .then(response => response.text())
    .then(data => {
        const longText = data;
        console.log(longText);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = longText;
        document.body.appendChild(paragraph);
    });