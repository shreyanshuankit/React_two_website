import React from "react";
import NavBar from "./navbar";
import Header from "./header";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import CopyRight from "./copyright";

const App = () => {
	return (
		<div>
			<NavBar name="Shreyanshu" />
			<Header />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
			<CopyRight />
		</div>
	);
};

export default App;
