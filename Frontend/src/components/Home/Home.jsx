import React, { Component } from 'react'
import './Home.css'
export default class App extends Component {
  render() { 
    return (
<>
<h1>Home</h1>
<div class="wrapper">
	<div id="welcome" class="container">
		<div class="title">
			<h2>Welcome to our website</h2>
		</div>
		<p>This is <strong>Amaryllis</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
	</div>
	<div id="three-column" class="container">
		<div><span class="arrow-down"></span></div>
		<div id="tbox1">
			<div class="title">
				<h2>Maecenas luctus</h2>
			</div>
			<p>Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris. Proin eu wisi suscipit nulla suscipit interdum.</p>
			<a href="#" class="button">Learn More</a> </div>
		<div id="tbox2">
			<div class="title">
				<h2>Integer gravida</h2>
			</div>
			<p>Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper suscipit eleifend. Donec mattis libero eget urna. Duis  velit ac mauris.</p>
			<a href="#" class="button">Learn More</a> </div>
		<div id="tbox3">
			<div class="title">
				<h2>Praesent mauris</h2>
			</div>
			<p>Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem suscipit  eleifend.</p>
			<a href="#" class="button">Learn More</a> </div>
	</div>
	<div id="portfolio" class="container">
		<div class="column1">
			<div class="box"> <a href="#"><img src="#" alt="" class="image image-full" /></a>
				<h3>Vestibulum venenatis</h3>
				<p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
				<a href="#" class="button button-small">Etiam posuere</a> </div>
		</div>
		<div class="column2">
			<div class="box"> <a href="#"><img src="#" alt="" class="image image-full" /></a>
				<h3>Praesent scelerisque</h3>
				<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
				<a href="#" class="button button-small">Etiam posuere</a> </div>
		</div>
		<div class="column3">
			<div class="box"> <a href="#"><img src="#" alt="" class="image image-full" /></a>
				<h3>Donec dictum metus</h3>
				<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
				<a href="#" class="button button-small">Etiam posuere</a> </div>
		</div>
		<div class="column4">
			<div class="box"> <a href="#"><img src="#" alt="" class="image image-full" /></a>
				<h3>Mauris vulputate dolor</h3>
				<p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
				<a href="#" class="button button-small">Etiam posuere</a> </div>
		</div>
	</div>
</div>

</>
    )
    
  }

}