for (let i = 0; i < catalog.length; i++) {
    catalog[i].id = 100 + i
}
function my_includ() {
    let x = document.querySelector("#name").value;
    console.log(x);
    let y = catalog.filter((item) => item.title.includes(x));
    console.log(y);
    my_table(y);
}
function country() {
    let c = catalog.reduce((prev, cur) => {
        if (!prev.includes(cur.country)) {
            prev.push(cur.country);
        }
        return prev;
    }, []).sort();
    c.forEach(i => {
        document.getElementById("country").innerHTML += "<option value=" + i + ">" + i + "</option>"
    });

}
country();

function year() {
    let x=document.querySelector("#low").value;
    let y=document.querySelector("#hight").value;
    let z=catalog.find(item=>item.year>x&&item.year<y);
    console.log(z);
    my_table(z);
}
function my_table(item){
    item.forEach(element => {
         document.getElementById("t").innerHTML+="<tr><td>"+element.id+"<td><td>"+element.title+"<td><td>"+element.artist+"<td><td>"+element.country+"<td><td>"+element.company+"<td><td>"+element.price+"<td><td>"+element.year+"<td></tr>";
    }); 
}
//my_table(catalog)

function my_select(){
let x=document.querySelector("#country").value;
let y=catalog.filter(item=>item.country===x);
console.log(y);
my_table(y)
}

function update(){
    let x={title:document.getElementById("title").value,
        artist:document.getElementById("artist").value,
        country:document.getElementById("country").value,
        company:document.getElementById("company").value,
        price:document.getElementById("price").value,
        year:document.getElementById("year").value,
        id:catalog[catalog.length-1].id+1
    }
    catalog.push(x);
    my_table(catalog)
}
function my_remove(id){
   let index=catalog.findIndex(item=>item.id===id);
   if(index>0){
    catalog.splice(index,1);
   }
}
my_remove(112);