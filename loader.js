const startLoader = ()=>{
    let loader, img , h1;
    loader = document.createElement('div');
    loader.id = "LOADER";
    loader.style.cssText="display:flex;flex-direction:column;align-items:center;justify-content:center;position: fixed;width: 100vw;min-height:100vh;height: 100%;background: #000;z-index: 99;top:0;";

    img = document.createElement('img');
    img.src = "./img/loader.svg";
    img.alt = "loader";
    img.style.cssText = "width: 100px;height: 100px;";

    h1 = document.createElement("h1");
    h1.innerText ="Loading";
    h1.style.cssText = "color: #fff;font-size: 2rem;";

    loader.appendChild(img);
    loader.appendChild(h1);

    document.body.appendChild(loader);
}

window.onload = ()=>{
    document.getElementById("LOADER").style.display="none";
}
