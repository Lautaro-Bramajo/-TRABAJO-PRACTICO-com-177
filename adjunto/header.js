
console.dir(document)

const headerHTML = document.getElementById("header")



headerHTML.innerHTML += `
        
        <a href="../index.html" class="inicio"><img class="logo" src="../images/logo.png" alt="img"></a>
        



        <button class="btn-menu" onclick="ocultar()"><i class="bi bi-list "></i></button>
        <nav class="header-nav" id="headerNav">
            
            <a href="">Ayuda</a>
            <div class="header-div">
                <a href="">Inicio</a>
                <p>|</p>
                <a href="">Regitrarse</a>
            </div>
        </nav>    
       
    `



