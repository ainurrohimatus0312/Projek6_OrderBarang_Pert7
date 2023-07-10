//alert('order');

let itemOrder = [
    {
        dipesan : false,
        harga : 13000,
        nama : 'Bakso',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Seblak',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Mie Ayam',
    },
    {
        dipesan : false,
        harga : 5000,
        nama : 'Es Teh Manis',
    },
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for(let i = 0; i <itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);
    });
}
function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = 'brown';
        elemen.style.color = 'white';
        totalOrder = totalOrder + itemOrder[index].harga;
    } else{
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = 'lightgrey';
        elemen.style.color = 'black';
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = 'Total <span>Rp '+ totalOrder +'</span>';
}