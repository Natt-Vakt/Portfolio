const MMenu = document.querySelector("#javascript")
const TMenu = document.querySelector("#hamburger")

//todo change submenues to autobuild from arrays

TMenu.addEventListener("click", e => {
    //console.log("menu");
    if(MMenu.innerHTML === "") {
        MMenu.innerHTML = `
        <nav>
            <img src="Pictures/Small/ProfilePhoto.jpg" alt="logo" id="logo">
            <a href="index.html"><section> <h1>Start ></h1> </section></a>
            <section id="digital"> <h1>Digital ></h1> </section>
            <div class="digitalContent">
                <a href="PortfolioWebsite.html">
                    <section class="menuItem">
                        <img src="Pictures/Large/Code.png" alt"Code" class"link">
                        <h3>Portfolio website</h3>
                    </section>
                </a>
                <a href="Parasitr.html">
                    <section class="menuItem">
                        <img src="Pictures/Large/Code.png" alt"Code" class"link">
                        <h3>Parasitr</h3>
                    </section>
                </a>
                <a href="FizzBuzz.html">
                    <section class="menuItem">
                        <img src="Pictures/Large/Code.png" alt"Code" class"link">
                        <h3>FizzBuzz</h3>
                    </section>
                </a>
            </div>
            <section id="physical"> <h1>Physical ></h1> </section>
            <div class="physicalContent">
                <a href="ArtDecoClock.html">
                    <section class="menuItem">
                        <img src="Pictures/Large/ArtDecoClock.jpg" alt"Artdeco clock" class"link">
                        <h3>Art deco clock</h3>
                    </section>
                </a>
            </div>
            <a href="info.html"><section> <h1>Info ></h1> </section></a>
        </nav>
        `;
    } else {
        MMenu.innerHTML = "";
    }
})
