'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSwiper = () => {
    return (
        <div className="h-[50vh] w-[100vw] flex justify-center">
            <Carousel 
                autoPlay 
                infiniteLoop 
                interval={3000} 
                stopOnHover={false} 
                showThumbs={false} 
                showStatus={false} 
                showArrows={true} 
                className="w-full "
            >
                <div>
                    <img 
                        src="img-1.jpg" 
                        alt="Nature Water" 
                        className="h-[50vh] w-full object-cover shadow-lg"
                    />
                </div>
                <div>
                    <img 
                        src="img-2.jpg" 
                        alt="Mountains Sky" 
                        className="h-[50vh] object-cover shadow-lg"
                    />
                </div>
                <div>
                    <img 
                        src="img-3.jpg" 
                        alt="Forest Trees" 
                        className="h-[50vh] object-cover shadow-lg"
                    />
                </div>
                <div>
                    <img 
                        src="img-4.jpg" 
                        alt="Beach Sunset" 
                        className="h-[50vh] object-cover shadow-lg"
                    />
                </div>
                <div>
                    <img 
                        src="img-5.jpg" 
                        alt="City Night" 
                        className="h-[50vh] object-cover shadow-lg"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default ImageSwiper;
