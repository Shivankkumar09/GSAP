gsap.from("#nav_part1,#nav_part2,#nav_part3",{
    y:-50,
    duration:0.5,
    delay:0.2,
    opacity:0,
    
})

gsap.from(".line,#xtra_1",{
    y:100,
    delay:0.2,
    duration:0.5
})

gsap.from("#img1,#img2,#img3",{
    opacity:0,
    y:-10,
    duration:0.5,
    delay:0.2,
})


gsap.to(".foot h3",{
  
    y:-10, 
    delay:0.2,
    repeat:-1,
    yoyo:true
})