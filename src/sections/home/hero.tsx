"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { HomeHeroSlide } from "@/components";
import { homeCarouselItems } from "@/data";

const Hero = () => {
	return (
		<div className="h-screen max-sm:h-[50vh]">
			<Swiper
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
				}}
				allowTouchMove={false}
				loop={true}
				modules={[Pagination, Autoplay]}
				className="mySwiper h-full"
			>
				{homeCarouselItems.map((item: any, index: number) => (
					<SwiperSlide key={index} className="h-full">
						<HomeHeroSlide
							subtitle={item.subtitle}
							subtitleColored={item.subtitleColored}
							title={item.title}
							imgUrl={item.imgUrl}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
