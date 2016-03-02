(function() {

  // function Slider(sliderDiv) {
  //   this.initialize.call(this, sliderDiv)
  // }

  function Slider() {
  // var Slider = function() {
    // console.log(this);
    this.initialize.apply(this, arguments);
  }

  Slider.prototype = {
      initialize: function(slider) {

        this.ul = slider.children[0];
        this.li = this.ul.children;

        // make <ul> as large as all <li>’s
        this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

        // add the transition class
        this.ul.className = "slider-transition";

        this.a = slider.getElementsByClassName('slider-control');

        this.currentIndex = 0;

        // add event listeners to slider-controls
        for (var i = 0; i < this.a.length; i++) {
          switch(this.a[i].getAttribute('data-slide')) {
              case 'prev':
                  this.a[i].addEventListener('click', this.goToPrev.bind(this));
                  break;
              case 'next':
                  this.a[i].addEventListener('click', this.goToNext.bind(this));
                  break;
              default:
                  console.error('"slider-control" missing "data-slide" attribute!')
            }
        }
      },

      goTo: function(index) {
        // filter invalid indices

        if (index < 0 || index > this.li.length - 1) {
          // console.log(this.ul.parentNode);

          // var liArray = [];
          // for (var i = 0; i < this.li.length; i++) {
          //   liArray.push(this.li[i]);
          // }

          // var new_ul = this.ul.cloneNode(true);

          // reorder list - first li becomes last li (supposing the user wil click prev again, not next)
          // other solution: last li becomes first li, but then if the user clicks previous again, this will get executed again
          if (index < 0) {
            // this.currentIndex = this.li.length - 1;
            index = this.li.length - 1;

            // var firstLi = new_ul.removeChild(new_ul.children[0]);
            // new_ul.appendChild(firstLi);

            // this.ul.parentNode.replaceChild(new_ul, this.ul);
            // this.ul = new_ul;
            // this.li = new_ul.children;

            // var firstLi = this.ul.removeChild(this.ul.children[0]);
            // this.ul.appendChild(firstLi);

            // remove the transition class to reposition instantly
            // this.ul.className = "";

            this.ul.style.left = '-' + (100 * this.currentIndex) + '%';

            // add the transition class
            // this.ul.className = "slider-transition";

            // console.log(this.li);
            //
            // this.currentIndex = this.li.length - 1;
            // this.ul.style.left = '-' + (100 * this.currentIndex) + '%';
          } else {
            this.currentIndex = -1;
            index = 0;

            // var firstLi = this.ul.removeChild(this.ul.children[this.li.length -1]);
            // this.ul.appendChild(firstLi);

            this.ul.style.left = '-' + (100 * this.currentIndex) + '%';
          }
        }



        // move <ul> left
        this.ul.style.left = '-' + (100 * index) + '%';

        this.currentIndex = index;
      },

      goToPrev: function() {
        this.goTo(this.currentIndex - 1);
      },

      goToNext: function() {
        this.goTo(this.currentIndex + 1);
      }
    }

  // var sliders = []
  // $('.slider').each(function() {
  //   sliders.push(new Slider(this))
  // })

  var mySlider = new Slider(document.getElementById("mySlider"));
  // console.log(mySlider);
}());
