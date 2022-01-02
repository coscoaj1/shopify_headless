import React, { useState } from 'react';
import Image from 'next/image';
import ProductList from './ProductList';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Hero({ products }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});
	console.log({ products });
	return (
		<>
			<div className="w-full h-auto navigation-wrapper">
				<div ref={sliderRef} className="keen-slider h-96 ">
					<div className="keen-slider__slide number-slide1">
						<div
							className="flex w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
							style={{
								backgroundImage:
									'url(' +
									'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyODQ4Mjl8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTY0MDYwMjUwNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080' +
									')',
							}}
						>
							<div className="container mx-auto">
								<div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start ">
									<p className="my-4 text-2xl text-black">
										Bluetooth Wireless Headphones
									</p>
									<Link href={`/products/wireless-headphones`}>
										<a className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black">
											view product
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="keen-slider__slide number-slide2">
						<div
							className="flex w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
							style={{
								backgroundImage:
									'url(' +
									'https://images.unsplash.com/photo-1501612164070-9919a55f7563?crop=entropy' +
									')',
							}}
						>
							<div className="container mx-auto">
								<div className="flex flex-col items-center w-full pl-24 tracking-wide lg:w-1/2 md:ml-16 md:items-start ">
									<p className="my-4 text-2xl text-gray-200">
										Ray Ban Sunglasses
									</p>
									<Link href={`/products/ray-ban-sunglasses`}>
										<a className="inline-block text-xl leading-relaxed text-gray-200 no-underline border-b border-gray-300 cursor-pointer">
											view product
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="keen-slider__slide number-slide3">
						<div
							className="flex w-full h-full pt-6 mx-auto bg-bottom bg-cover md:pt-0 md:items-center"
							style={{
								backgroundImage:
									'url(' +
									'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyODQ4Mjl8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc25lYWtlcnN8ZW58MHx8fHwxNjQwOTQyMjcy\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080' +
									')',
							}}
						>
							<div className="container mx-auto">
								<div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
									<p className="my-4 text-2xl text-gray-200">Nike Sneakers</p>
									<Link href={`/products/nike-sneakers`}>
										<a className="inline-block text-xl text-gray-200 leading-relaxed no-underline border-b border-gray-200">
											view product
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
			</div>
			{loaded && instanceRef.current && (
				<div className="dots">
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
					].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={'dot' + (currentSlide === idx ? ' active' : '')}
							></button>
						);
					})}
				</div>
			)}
		</>
	);
}

function Arrow(props) {
	const disabeld = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}
