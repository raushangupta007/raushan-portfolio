// ===============================
// Particle Background Animation
// ===============================


const particleBox = document.getElementById("particles");


for (let i = 0; i < 80; i++) {

    let particle = document.createElement("span");

    particle.style.position = "absolute";

    particle.style.width = "3px";
    particle.style.height = "3px";

    particle.style.background = "#f5b400";

    particle.style.borderRadius = "50%";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";


    particle.style.opacity = Math.random();


    particle.style.animation =
        `move ${5 + Math.random() * 10}s linear infinite`;


    particleBox.appendChild(particle);

}





// Create Animation CSS

let style = document.createElement("style");

style.innerHTML = `

@keyframes move{

0%{

transform:translateY(0);

}


50%{

transform:translateY(-100px);

}


100%{

transform:translateY(0);

}

}

`;

document.head.appendChild(style);






// ===============================
// Scroll Reveal Animation
// ===============================


const cards = document.querySelectorAll(
    ".card,.skill-card,.project-card"
);


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";


        }


    });


}, { threshold: .2 });



cards.forEach(card => {


    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";


    card.style.transition =
        "all .8s ease";


    observer.observe(card);


});







// ===============================
// Typing Effect
// ===============================


const role = document.querySelector(".hero h2");


let text = "ML Engineer";

let index = 0;


role.innerHTML = "";


function typing() {


    if (index < text.length) {


        role.innerHTML += text.charAt(index);

        index++;


        setTimeout(typing, 150);


    }


}


typing();








// ===============================
// Navbar Active Link
// ===============================


let sections = document.querySelectorAll("section");

let links = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        let top = window.scrollY;


        let offset = section.offsetTop - 150;


        let height = section.offsetHeight;



        if (top >= offset && top < offset + height) {

            current = section.id;

        }


    });



    links.forEach(link => {


        link.style.color = "white";


        if (link.getAttribute("href")
            ==
            "#" + current) {


            link.style.color = "#f5b400";


        }



    });


});








// ===============================
// Smooth Button Effect
// ===============================


const buttons = document.querySelectorAll(".btn");


buttons.forEach(btn => {


    btn.addEventListener("mouseenter", () => {


        btn.style.transform =
            "scale(1.05)";


    });


    btn.addEventListener("mouseleave", () => {


        btn.style.transform =
            "scale(1)";


    });


});

// =======================
// Dark Light Mode
// =======================


const toggle =
    document.getElementById("themeToggle");


toggle.onclick = () => {


    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {


        toggle.innerHTML = "☀️";


    }

    else {


        toggle.innerHTML = "🌙";


    }


};






// =======================
// Project Modal
// =======================


function openProject() {


    document.getElementById(
        "projectModal"
    ).style.display = "flex";


}



function closeProject() {


    document.getElementById(
        "projectModal"
    ).style.display = "none";


}






// =======================
// Back To Top
// =======================


let topBtn = document.createElement("button");


topBtn.innerHTML = "↑";


topBtn.className = "top-btn";


document.body.appendChild(topBtn);



topBtn.onclick = () => {


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


};



window.addEventListener(
    "scroll",
    () => {


        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        }

        else {

            topBtn.style.display = "none";

        }


    });

