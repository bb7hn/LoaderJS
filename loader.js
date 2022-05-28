const startLoader = ()=>{
    let loader, img , h1;
    loader = document.createElement('div');
    loader.id = "LOADER";
    loader.style.cssText="display:flex;flex-direction:column;align-items:center;justify-content:center;position: fixed;width: 100vw;min-height:100vh;height: 100%;background: #000;z-index: 99;top:0;";

    //img = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //img.innerHTML = '<circle cx="15" cy="15" r="15"><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15"/><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1"/></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="9" repeatCount="indefinite" to="9" values="9;15;9"/><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="0.5" repeatCount="indefinite" to="0.5" values=".5;1;.5"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15"/><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1"/></circle>'
    img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/bb7hn/LoaderJS/main/loading.svg"
    img.alt = "loader";
    img.style.cssText = "width: 120px;height: 40px; fill:#fff";

    h1 = document.createElement("h1");
    h1.innerText ="Loading";
    h1.style.cssText = "color: #fff;font-size: 2rem;";

    loader.appendChild(img);
    loader.appendChild(h1);

    document.body.appendChild(loader);
}
window.addEventListener("load", function() {
    document.getElementById("LOADER").style.display="none";
});
