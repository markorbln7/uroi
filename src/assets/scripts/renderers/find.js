import Highway from '@dogstudio/highway';

class FindRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        $(function(){
            $('.find__slider').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: '.find__arrow-next',
                prevArrow: '.find__arrow-prev',
                responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                ]
            });
        });
    }
    onLeaveCompleted() {}
}

export default FindRenderer;