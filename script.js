



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    
});


    gsap.from(".nav > .nav-list> li:hover",{
        x:100,
        opacity:0,
        delay:1.5,
        duration:2.9,
        stagger:0.3 
    })
    

gsap.from(".nav > .nav-header > .nav-title img",{
    x:100,
    opacity:0,
    delay:1.5,
    duration:2.9,
    stagger:0.3 
})

gsap.from(".nav > .nav-list i",{
    y:100,
    opacity:0,
    delay:1.5,
    duration:2.9,
    stagger:0.3
})


gsap.from("#banner-text ,#banner-text2 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})



gsap.from("#main-img img",{
    //y:100,
    scale:0.8,
    opacity:0,
    delay:1.5,
    duration:0.9,

})





gsap.from("#banner-text img",{
    y:100,
    scale:0.8,
    delay:1.5,
    duration:2.0,

})


gsap.from("#banner-text2 img",{
    x:-100,
    scale:0.8,
    delay:1.5,
    duration:3.0,

})



///PAge3

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#top",
  markers:true,
    start:"60% 50%",
     end:"100% 40%",
    scrub:2, 
    var:true,

}})

tl
.to("#top",{
    top:"-60%"
},'a')
.to("#bottom",{
    bottom:"-30%"
},'a')
.to("#top-h",{
    top:"80%"
},'a')
.to("#bottom-h",{
    bottom:"-80%"
},'a')
.to("content",{
    marginTop:"0%"
},'a')


//document.addEventListener("mousemove");


// PAge2
    // var swiper = new Swiper('.swiper-container', {
    //   direction: 'vertical',
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });




/////PAge 4




window.addEventListener("mousemove", function(dets){
    document.querySelector("#slidephoto").style.top=`28%`
    document.querySelector("#slidephoto").style.left=`${dets.clientX}px`
    document.querySelector("#slidephoto").style.transform = `translate(${-dets.clientX*0.20}px , ${dets.clientY*0.45}px)`
});

document.querySelector("#chainn")
.addEventListener("mousemove", function(){
        document.querySelector("#slidephotos").style.marginTop = "0%"
        document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
        document.querySelector("#chainn").style.color = "initial"
})



document.querySelector("#aty")
.addEventListener("mousemove", function(){
        document.querySelector("#slidephotos").style.marginTop = "-120%"
        document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
        document.querySelector("#aty").style.color = "initial"
})


document.querySelector("#mic")
.addEventListener("mousemove", function(){
        document.querySelector("#slidephotos").style.marginTop = "-240%"
        document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
        document.querySelector("#mic").style.color = "initial"
})


document.querySelector("#tapso")
.addEventListener("mousemove", function(){
        document.querySelector("#slidephotos").style.marginTop = "-360%"
        document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
        document.querySelector("#tapso").style.color = "initial"
})




document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
    document.querySelector("#btnsm").style.backgroundColor = "blue"
    document.querySelector("#btnsm").style.cursor = "Pointer"
    document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
    document.querySelector("#btnsm").style.backgroundColor = "initial"
    document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"
})





// page5 smooth scrolling


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1,1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}


requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({pause: true});


timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});




const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");

gsap.to(box_items, {
    xPercent: -100 * (box_items.length - 1),
    ease: "sine.out",
    scrollTrigger: {
        trigger: section_2,
        pin: true,
        scrub: 3,
        snap: 1 / (box_items.length - 1),
        end: "+=" + section_2.offsetWidth
    }
});

