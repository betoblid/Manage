// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Deposition from "../deposition";

interface SlideProps {
  dado: {
    id: string
    thumb: string,
    nameUser: string,
    descriptionUser: string
  }[]
}
const Slide = ({ dado }: SlideProps) => {

  const widthScreenuseState = (window.innerWidth < 700) ? 1 : (window.innerWidth > 1000) ? 3 : 2

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={5}
      slidesPerView={ widthScreenuseState}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}>
      {
        dado.map((iten) => <SwiperSlide key={iten.id+12}>
          <Deposition key={iten.id} description={iten.descriptionUser} name={iten.nameUser} thumb={iten.thumb} />
        </SwiperSlide>)
      }
    </Swiper>
  );
}
export default Slide;
