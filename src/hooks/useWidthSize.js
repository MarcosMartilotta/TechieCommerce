import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		setIsMobile(width <= 768);
	}, [width]);

	return { width, height, isMobile };
};

export default useScreenSize;
