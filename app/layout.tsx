import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
	{/*<!-- Meta --> */}
	<meta charSet="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta name="description" content=""/>
	<meta name="keywords" content=""/>
	<meta name="author" content="Awaiken"/>
	{/*<!-- Page Title --> */}
	<title>MediPro - Hospital HTML Template</title>
	{/*<!-- Favicon Icon --> */}
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.png"/>
    {/*<!-- Google Fonts css-->*/}
    <link rel="preconnect" href="../../../external.html?link=https://fonts.googleapis.com/"/>
    <link rel="preconnect" href="../../../external.html?link=https://fonts.gstatic.com/" crossOrigin/>
    <link href="../../../external.html?link=https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet"/>
	{/*<!-- Bootstrap Css --> */}
	<link href="../public/css/bootstrap.min.css" rel="stylesheet" media="screen"/>
	{/*<!-- SlickNav Css --> */}
	<link href="../public/css/slicknav.min.css" rel="stylesheet"/>
	{/*<!-- Swiper Css --> */}
	<link rel="stylesheet" href="../public/css/swiper-bundle.min.css"/>
  <link href="../public/css/all.css" rel="stylesheet" media="screen"/>

	{/*<!-- Animated Css --> */}
	<link href="../public/css/animate.min.css" rel="stylesheet"/>
	{/*<!-- Magnific Popup core CSS file --> */}
	<link rel="stylesheet" href="../public/css/magnific-popup.css"/>
	{/*<!-- Main custom Css --> */}
	<link href="../public/css/custom.css" rel="stylesheet" media="screen"/>
</head>

      <body className={inter.className}>{children}
        
    {/*<!-- Jquery Library File -->  */}
    <script src="../public/js/jquery-3.7.1.min.js"></script>
    {/*<!-- Bootstrap js file -->  */}
    <script src="../public/js/bootstrap.min.js"></script>
    {/*<!-- Validator js file --> */}
    <script src="../public/js/validator.min.js"></script>
    {/*<!-- SlickNav js file -->  */}
    <script src="../public/js/jquery.slicknav.js"></script>
    {/*<!-- Swiper js file -->  */}
    <script src="../public/js/swiper-bundle.min.js"></script>
    {/*<!-- Counter js file -->  */}
    <script src="../public/js/jquery.waypoints.min.js"></script>
    <script src="../public/js/jquery.counterup.min.js"></script>
    {/*<!-- Magnific js file -->  */}
    <script src="../public/js/jquery.magnific-popup.min.js"></script>
    {/*<!-- SmoothScroll -->  */}
    <script src="../public/js/SmoothScroll.js"></script>
    {/*<!-- Parallax js -->  */}
    <script src="../public/js/parallaxie.js"></script>
    {/*<!-- MagicCursor js file -->  */}
    <script src="../public/js/gsap.min.js"></script>
    <script src="../public/js/magiccursor.js"></script>
    {/*<!-- Text Effect js file -->  */}
    <script src="../public/js/SplitText.js"></script>
    <script src="../public/js/ScrollTrigger.min.js"></script>
    {/*<!-- Wow js file -->  */}
    <script src="../public/js/wow.js"></script>
    {/*<!-- Main Custom js file -->  */}
    <script src="../public/js/function.js"></script>
      </body>
    </html>
  );
}
