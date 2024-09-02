// animation js
const texts = [
    { elementId: 'heading', text: 'OMOLOYE BOLUWATIFE' },
    { elementId: 'introText', text: `Hi there! I'm Code X, a passionate Full Stack Developer <br>specializing in creating innovative and efficient web <br>solutions. Explore my portfolio to see a showcase of my <br>projects, skills, and experiences. I love combining <br>creativity with technical expertise to build user-friendly <br>and robust applications. Let's connect and discuss how we <br>can collaborate on exciting web development projects!` }
  ];

  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (textIndex < texts.length) {
      const currentTextObj = texts[textIndex];
      const element = document.getElementById(currentTextObj.elementId);
      element.innerHTML = currentTextObj.text.slice(0, charIndex) + '<span class="typing"></span>';
      charIndex++;
      if (charIndex <= currentTextObj.text.length) {
        setTimeout(type, 30 );
      } else {
        charIndex = 0;
        textIndex++;
        setTimeout(type, 300); // Pause before starting the next element
      }
    } else {
      // Show the button after typing is complete
      document.getElementById('startButton');
      startButton.classList.remove('hidden');
      startButton.classList.add('fade-in');

    }
  }

  document.addEventListener('DOMContentLoaded', type);
  // cse c0nrent
 
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll('#case-content,#test-info-container,#recent-work-container,#contact');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target); // Optional: stop observing after the element is in view
                }
            });
        }, {
            threshold: 0.1 // Adjust this value as needed
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    });
    // smoth scrolll js
  //   document.querySelectorAll('nav a').forEach(anchor => {
  //     anchor.addEventListener('click', function (e) {
  //         e.preventDefault();
  
  //         const targetId = this.getAttribute('href').substring(1);
  //         const targetElement = document.getElementById(targetId);
  
  //         window.scrollTo({
  //             top: targetElement.offsetTop,
  //             behavior: 'smooth'
  //         });
  //     });
  // });
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const scrollOptions = {
            top: targetElement.offsetTop,
            behavior: 'smooth'
        };

        window.scrollTo(scrollOptions);

        // For smoother and slower scroll, repeat the smooth scroll behavior
        setTimeout(() => {
            window.scrollTo(scrollOptions);
        }, 100); // Adjust the timeout duration as needed
    });
});
// dropdown
document.getElementById("dropdownButton").addEventListener("click", function() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('#dropdownButton')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
});
