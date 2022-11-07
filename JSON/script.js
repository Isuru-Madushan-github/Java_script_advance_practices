function display(laptop){
    const laptopInfo=`<h1>${laptop.Brand} ${laptop.Model} ${laptop.Year}</h1>
    <img src="${laptop.Image}" alt="">
    <table>
        <tr>
            <th>Price:</th>
            <td>${laptop.Price}</td>
        </tr>
        <tr>
            <th>Brand:</th>
            <td>${laptop.Brand}</td>
        </tr>
        <tr>
            <th>Model:</th>
            <td>${laptop.Model}</td>
        </tr>
        <tr>
            <th>Year:</th>
            <td>${laptop.Year}</td>
        </tr>
        <tr>
            <th>Battery:</th>
        </tr>
        <tr>
            <td>Type:</td>
            <td>${laptop.Battery.Type}</td>
        </tr>
        <tr>
            <td>Life:</td>
            <td>${laptop.Battery.Life}</td>
        </tr>
        <tr>
            <th>Features:</th>
                <td>${laptop.Features[0]}<br>${laptop.Features[1]}<br>${laptop.Features[2]}</td>
        </tr>
        <tr>
            <th>Color:</th>
            <td>${laptop.Color}</td>
        </tr>
    </table>`
    document.querySelector('.container').innerHTML=laptopInfo;
}

const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        console.log();
        display(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET','laptop.json');
xhr.send();