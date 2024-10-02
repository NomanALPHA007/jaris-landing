"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ctaSchoolsCarouselItems } from "@/data";

const CTASchools = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: any) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<div className='relative w-full padding-y lg:py-36 bg-[url("/images/home/home-hero-slide-1.jpeg")] '>
			<div className="absolute inset-0 bg-jaris-blue opacity-75" />
			<div className="w-full flex flex-col items-center justify-center gap-40">
				<Swiper
					slidesPerView={"auto"}
					centeredSlides={true}
					spaceBetween={70}
					loop={true}
					pagination={pagination}
					modules={[Pagination]}
					className="mySwiper cta-swiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
				>
					{ctaSchoolsCarouselItems.map((item: any, index: number) => (
						<SwiperSlide
							key={index}
							className="!w-[90%] md:!w-[55%] !h-[85%] md:!h-[90%]"
						>
							<div className="relative h-full w-full overflow-hidden rounded-xl">
								<div
									className="absolute inset-0 bg-cover filter brightness-75 rounded-xl scale-110"
									style={{ backgroundImage: `url(${item.imgUrl})` }}
								/>
								<div className="relative z-20 h-full padding flex flex-col items-center justify-end gap-5">
									<h1 className="title font-bold text-bg-text">{item.title}</h1>
									<p className="subtitle text-bg-primary text-center">
										{item.subtitle}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default CTASchools;
