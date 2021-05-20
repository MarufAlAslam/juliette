$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
        
  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav',
    dots:true,
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    infinite:true,
    loop:true,
    centerMode: true,
    focusOnSelect: true,
  });


  $('.sidebarbtn').click(function(){
    $('.sidebar-bg').show(400)
    $('.sidebar').show(400)
    $('body').css("overflow-y",'hidden')
    $('html').css("overflow-y",'hidden')
  })
  

  $('.btnClose').click(function(){
    $('.sidebar-bg').hide(400)
    $('.sidebar').hide(400)
    $('body').css("overflow-y",'unset')
    $('html').css("overflow-y",'unset')
  })
  var  activeState = 0
  $('.step1btn').click(function(){
    $('.step1').hide()
    $('.step2').show()
    $('.active1').removeClass('active')
    $('.active2').addClass('active')
    
    activeState = 1+1
    var actStr = (activeState-1).toString()
    console.log('active'+actStr)
    console.log(activeState)
    $('.active'+actStr).click(function(){
      $('.step1').hide()
      $('.step2').hide()
      $('.step3').hide()
      $('.active1').removeClass("active")
      $('.active2').removeClass("active")
      $('.active3').removeClass("active")
  
      $('.step'+actStr).show()
      $('.active'+actStr).addClass("active")
      activeState--
      console.log(activeState)
    })

    $('body').css("overflow-y",'hidden')
    $('html').css("overflow-y",'hidden')
  })

  $('.step2btn').click(function(){
    $('.step2').hide()
    $('.step3').show()
    $('.active2').removeClass('active')
    $('.active3').addClass('active')

    activeState = 2+1
    var actStr = (activeState-1).toString()
    console.log('active'+actStr)
    console.log(activeState)
    $('.active'+actStr).click(function(){
      $('.step1').hide()
      $('.step2').hide()
      $('.step3').hide()
      $('.active1').removeClass("active")
      $('.active2').removeClass("active")
      $('.active3').removeClass("active")
  
      $('.step'+actStr).show()
      $('.active'+actStr).addClass("active")
      activeState--
      console.log(activeState)
    })
    
    
  })

  $('.step3btn').click(function(){
    $('.step3').hide()
    $('.cart-popup').show()
    $('.active3').removeClass('active')
    // $('.active3').addClass('active')\
    activeState = 3+1
    var actStr = (activeState-1).toString()
    console.log('active'+actStr)
    console.log(activeState)
    $('.active'+actStr).click(function(){
      $('.step1').hide()
      $('.step2').hide()
      $('.step3').hide()
      $('.active1').removeClass("active")
      $('.active2').removeClass("active")
      $('.active3').removeClass("active")
  
      $('.step'+actStr).show()
      $('.active'+actStr).addClass("active")
      activeState--
      console.log(activeState)
    })
  })

  $('.btn-cart-close').click(function(){
    $('.sidebar-bg').hide(400)
    $('.cart-popup').hide(400)
    $('.sidebar').hide(400)
    $('.step1').show()
    $('.active1').addClass('active')
    $('.card-closable').show(100)

    $('body').css("overflow-y",'unset')
    $('html').css("overflow-y",'unset')
  })

  $('.btn-card-close').click(function(){
    $('.card-closable').hide(100)
    
  })

  $('.cartBtn').click(function(event){
    event.preventDefault()
    $('.sidebar-bg').show(400)
    $('.cart-popup').show(400)

    $('body').css("overflow-y",'hidden')
    $('html').css("overflow-y",'hidden')
  })

  $('.bars').click(function(){
    $('.sidebarBgg').show(100)
    $('.sidebarMenu').show(200)
  })

  $('.btnSidebarmenuCloser').click(function(){
    $('.sidebarMenu').hide(200)
    $('.sidebarBgg').hide(300)
  })

  $('.livBtn').click(function(){
    $('.Livraisons').show(300)
    $('.mesinfo').hide(300)
    $('.Historique').hide(300)
    $('.card').removeClass('active')
    $('.livBtn').addClass('active')
  })
  $('.mesBtn').click(function(){
    $('.Livraisons').hide(300)
    $('.mesinfo').show(300)
    $('.Historique').hide(300)
    $('.card').removeClass('active')
    $('.mesBtn').addClass('active')
  })
  $('.histBtn').click(function(){
    $('.Livraisons').hide(300)
    $('.mesinfo').hide(300)
    $('.Historique').show(300)
    $('.card').removeClass('active')
    $('.histBtn').addClass('active')
  })

  $('.next1').click(function(event){
    event.preventDefault()
    $('.Livraisons').hide(300)
    $('.mesinfo').show(300)
    $('.card').removeClass('active')
    $('.mesBtn').addClass('active')
  })
  $('.next2').click(function(event){
    event.preventDefault()
    $('.mesinfo').hide(300)
    $('.Historique').show(300)
    $('.card').removeClass('active')
    $('.histBtn').addClass('active')
  })
  

 function inc(){
   document.getElementById('inpNum').stepUp()
 }
 function dec(){
  document.getElementById('inpNum').stepDown()
}

function inc1(){
  document.getElementById('inpNum1').stepUp()
}
function dec1(){
 document.getElementById('inpNum1').stepDown()
}

function inc2(){
  document.getElementById('inpNum2').stepUp()
}
function dec2(){
 document.getElementById('inpNum2').stepDown()
}

function inc3(){
  document.getElementById('inpNum3').stepUp()
}
function dec3(){
 document.getElementById('inpNum3').stepDown()
}

function inc4(){
  document.getElementById('inpNum4').stepUp()
}
function dec4(){
 document.getElementById('inpNum4').stepDown()
}
function inc5(){
  document.getElementById('inpNum5').stepUp()
}
function dec5(){
 document.getElementById('inpNum5').stepDown()
}

function inc6(){
  document.getElementById('inpNum6').stepUp()
}
function dec6(){
 document.getElementById('inpNum6').stepDown()
}
$('.popBtn').click(function(event){
  event.preventDefault()
  $('.popup').toggle()
})

$('.anotherpopup').click(function(event){
  event.preventDefault()
  $('.another-pp-bg').show()
  $('.another-popup').show()
})
$('.closeBnt').click(function(){
  $('.another-pp-bg').hide()
  $('.another-popup').hide()
})

$('.newClose').click(function(){
  $('.first').hide(300)
})

$('.payment-div .btn').click(function(){
  $('.first').show(300)
})

$('.new-popup .btn.btn-link.text-dark').click(function(){
  $('.final').show(300)
  $('.first').hide(300)
})


$('.finalClose').click(function(){
  $('.final').hide(300)
  $('.cart-popup').hide(200)
  $('.sidebar-bg').hide(200)
})