const movies = [
    {
        name: "Stranger Things",
        launchYear: 2016,
        type: "Web Series",
        description: "A group of friends uncover supernatural mysteries and secret experiments while facing dangerous creatures in their small town."
    },
    {
        name: "Game of Thrones",
        launchYear: 2011,
        type: "Web Series",
        description: "Noble families fight for power and survival while an ancient supernatural threat approaches from the frozen north."
    },
    {
        name: "Peddi",
        launchYear: 2026,
        type: "Movie",
        description: "A spirited villager uses his sporting talent to unite his community and fight against powerful forces."
    },
    {
        name: "Inka",
        launchYear: 2020,
        type: "Web Series",
        description: "A comedy drama following characters through relationships, unexpected situations, and entertaining moments."
    },
    {
        name: "Locked Up",
        launchYear: 2015,
        type: "Web Series",
        description: "A young woman enters prison after financial crimes and must learn to survive its dangerous world."
    }
];

const question = document.querySelectorAll(".actquestion");
question.forEach(actquestion=>{
    actquestion.addEventListener("click",()=>{
        actquestion.classList.toggle("active");

        const icon = actquestion.querySelector("#plus-icon");
        icon.classList.toggle("active");
         
    });
});

const images = document.querySelectorAll(".boxpage2img");
const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".modal-img");
const close = document.querySelector(".close-btnn");

images.forEach((image,idx)=>{
        image.addEventListener("click",()=>{
        modal.style.display = "flex";
        modalImg.src = image.src;
        movieclick(idx);
    });
    });

     function movieclick(idx){
     document.querySelector(".year").innerHTML = movies[idx].launchYear;
     document.querySelector(".movie-type").innerHTML = movies[idx].type;
     document.querySelector(".detail-bottom").innerHTML = movies[idx].description;
  }

    close.addEventListener("click", ()=>{
        modal.style.display = "none";

    });

        modal.addEventListener("click", (e)=>{
            if(e.target == modal){
                modal.style.display = "none";
            }
    });


const isLoggedin= localStorage.getItem("isLoggedin");
const userData = localStorage.getItem("userData");
const loginBtn = document.querySelector("#login-btn");

if(isLoggedin === "true"){
    loginBtn.innerHTML = "Logout";
}
else{
    loginBtn.innerHTML="Sign in"
}
loginBtn.addEventListener("click", ()=>{
    if(isLoggedin === "true"){
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("userData");
    window.location.reload();
    }
    else{
        window.location.href="loginpage.html";
    }
})
















