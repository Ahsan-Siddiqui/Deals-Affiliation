var typed = new Typed(".auto-input",{
    strings:["Brand Visibility","Brand Equity","Digital Growth"],
    typeSpeed:100,
    backSpeed:40,
    loop:true,
    showCursor: false
  })

  let number1  = document.getElementById("number1");
  let number2  = document.getElementById("number2");
  let number3  = document.getElementById("number3");
  let number4  = document.getElementById("number4");

  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  setInterval(() => {
    if(counter1 == 500)
    {
      clearInterval();
    }
    else
    {
      counter1 += 1;
      number1.innerHTML = counter1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "<sup>+</sup>";
    }
  },-100)

  setInterval(() => {
    if(counter2 == 100)
    {
      clearInterval();
    }
    else
    {
      counter2 += 1;
      number2.innerHTML = counter2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "<sup>%</sup>";
    }
  },-1000)

  setInterval(() => {
    if(counter3 == 15)
    {
      clearInterval();
    }
    else
    {
      counter3 += 1;
      number3.innerHTML = counter3 + "<sup>+</sup>";
    }
  },-1000)

  setInterval(() => {
    if(counter4 == 100)
    {
      clearInterval();
    }
    else
    {
      counter4 += 1;
      number4.innerHTML = counter4 + "<sup>+</sup>";
    }
  },-1000)

  function reveal() {
    var reveals = document.querySelectorAll(".slide-left,.slide-top,.slide-right,.slide-bottom");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }
  
  window.addEventListener("scroll", reveal);
  