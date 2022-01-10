//------------------------------------------------------------------------------------------------------------------------------
// Copyright (c) 2022 Siddharth Ray
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted (subject to the limitations in the disclaimer below) provided that
// the following conditions are met:
//
// Redistributions of source code must retain the above copyright notice, this list
// of conditions and the following disclaimer.
//
// Redistributions in binary form must reproduce the above copyright notice, this
// list of conditions and the following disclaimer in the documentation and/or
// other materials provided with the distribution.
//
// Neither the name of Siddharth Ray nor the names of its contributors
// may be used to endorse or promote products derived from this software without
// specific prior written permission.
//
// NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY THIS
// LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//------------------------------------------------------------------------------------------------------------------------------


var slideIndex = 1;
showSlides(slideIndex);
var GRADING_MODE = confirm('Do you want to enter Presentation Mode or Grading Mode? \n\nPress "OK" for Grading Mode and "CANCEL" for Presentation Mode') ? true : false
if (GRADING_MODE) {
    if (prompt("Enter the Grading Entry Password (GEP)") != "REDACTED_FOR_SECURITY") {
        alert("Wrong Password, reload the page to try again. Defaulting to Presentation Mode")
        GRADING_MODE = false
    }
}

// Next/previous controls
function plusSlides(n) {
    console.log("Moving to Slide Index: " + (slideIndex + n))
    if (!GRADING_MODE && (slideIndex + n) == 3) { slideIndex = 6 }
    else if (!GRADING_MODE && (slideIndex + n) == 5) { slideIndex = 2 }
    else {slideIndex += n}
    const slide3immersion = document.getElementById("slide-3-immersion");
    const slide6immersion = document.getElementById("slide-6-immersion");
    if (slideIndex == 3) {
        console.warn("STARTING IMMERSION 1")
        slide3immersion.play()
    } else if (slideIndex == 6) {
        console.warn("STOPPING IMMERSION 1")
        var fadeAudio = setInterval(function () {
            // When volume at zero stop all the intervalling
            if (slide3immersion.volume === 0.0) {
                clearInterval(fadeAudio);
                slide3immersion.pause();
                slide3immersion.volume = 1
            } else if (slide3immersion.volume >= 0.025) {
                slide3immersion.volume -= 0.025;
                console.log(slide3immersion.volume)
            } else {
                slide3immersion.volume -= slide3immersion.volume;
                console.log(slide3immersion.volume)
            }
        }, 50);
        console.warn("STARTING IMMERSION 2")
        slide6immersion.play()
        slide6immersion.loop = true;
        slide6immersion.volume = 0
        var fadeinAudio = setInterval(function () {
            // When volume at zero stop all the intervalling
            if (slide6immersion.volume === 1) {
                clearInterval(fadeinAudio);
            } else if ((slide6immersion.volume + 0.025) <= 1) {
                slide6immersion.volume += 0.025;
                console.log(slide6immersion.volume)
            } else {
                slide6immersion.volume += (1 - slide6immersion.volume);
                console.log(slide6immersion.volume)
            }
        }, 50);
    } else if (slideIndex == 9) {
        console.warn("STOPPING IMMERSION 2")
        var fadeOutAudio = setInterval(function () {
            // When volume at zero stop all the intervalling
            if (slide6immersion.volume === 0.0) {
                clearInterval(fadeOutAudio);
                slide6immersion.pause();
                slide6immersion.volume = 1
            } else if (slide6immersion.volume >= 0.025) {
                slide6immersion.volume -= 0.025;
                console.log(slide6immersion.volume)
            } else {
                slide6immersion.volume -= slide6immersion.volume;
                console.log(slide6immersion.volume)
            }
        }, 50);

    }
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
}

$(document).keypress(function (e) {
    if (e.charCode == 103) {
        plusSlides(1)
    }
});