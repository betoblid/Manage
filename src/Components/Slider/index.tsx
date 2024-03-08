// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Deposition from "../deposition";
import { userMediaQuery } from '../../Hooks/userMediaQuery';


interface SlideProps {
  dado: {
    id: string
    thumb: string,
    nameUser: string,
    descriptionUser: string
  }[]
}
const Slide = ({ dado }: SlideProps) => {

  const medium = userMediaQuery("(min-width: 700px) and (max-width: 1000px)")
  const small = userMediaQuery("(max-width: 700px)")

  const HandleSlidesViews = small ? 1 : medium ? 2 : 3

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={5}
      slidesPerView={ HandleSlidesViews }
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
