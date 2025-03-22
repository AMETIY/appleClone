// The following question is based on the responsive Apple website you built back in phase 1. As 
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of 
// the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote 
// from the link provided below to implement the interactivity of apple.com's footer section. 
// Responsive code for apple.com: 
// ● Download the ZIP file 
// You can refer to apple.com’s live website to check how the footer behaves: 
// ● https://www.apple.com/ 
// In summary, the footer fully displays all the five columns in expanded state while viewed on 
// desktop or tablet size devices. You are required to implement the following mobile size 
// features.
// Each of the five columns collapse to a single column. Make these columns collapse to a single column. 
// ● All the sub-links under each <h3> are hidden. Hide these sub-links 
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the 
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right 
// side of each <h3>. (Hint: everything up to this point can be achieved without using 
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these). 
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3> 
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to 
// implement the following feature) 
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this 
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement 
// the following feature) 


  let plus = $(".footer-links-wrapper h3");
  // console.log(plus);
//   plus.each((index, element) => {
//     $(element).click(() => {
//       if ($(window).width() <= 768) {
//         $(element).next("ul").slideToggle();
//         //   $(element).next("ul").slideToggleClass("expanded")
//         // let down = $(element).hasClaSS("expanded");

//         $(element).toggleClass("expanded");
//       }
//     });
//   });
 
  plus.on("click", function (){
      if ($(window).width() < 768) {
        console.log(this);
          // Toggle the expanded class on the clicked h3
          $(this).next('ul').slideToggle();
          $(this).toggleClass('expanded');

        
        }
  })
  
  // $(window).on("resize", function (){
    //   location.reload();
    // })
    
    console.log($(window).width());

$(window).resize(function() {
  if ($(window).width() > 768) {
    // On desktop, make sure all ULs are visible
    $(".footer-links-wrapper ul").show();
    // Remove expanded class from all h3 elements
    $(".footer-links-wrapper h3").removeClass('expanded');
  } else {
    // On mobile, hide all ULs (except those with expanded h3)
    $(".footer-links-wrapper ul").hide();
  }
});
// console.log(window.location);