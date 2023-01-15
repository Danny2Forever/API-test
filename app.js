let img = document.getElementById('image');


async function get_fecth() {
    let x = await fetch('https://picsum.photos/900');
    let Image = x.url ;
    console.log(x)
    img.src = Image ;
}


