import Highway from '@dogstudio/highway';

class RegimenRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        $(function () {
            $('.staples__slider').slick({
               infinite: false,
               speed: 300,
               slidesToShow: 3,
               slidesToScroll: 1,
               nextArrow: '.staples__arrow-next',
               prevArrow: '.staples__arrow-prev',
               responsive: [
                  {
                     breakpoint: 600,
                     settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                     }
                  }
               ]
            });
         });
    }
    onLeaveCompleted() {}
}

export default RegimenRenderer;