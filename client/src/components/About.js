import React from 'react'
import '../static/About.css';



const About = () => {
  return (
    <>
        <div className="title">
        <h1>Welcome to The Todos Project!</h1>
        </div>
        <ul class="tilesWrap">
	<li>
		<h4>Why?</h4>
		<h3>Our Inspiration</h3>
		<p>
    The Todos Project is deisigned so that we reimagine the way we think about adventure,
    exploration and learning as a collective.
		</p>
	</li>
	<li>
		<h4>What?</h4>
		<h3>Our App</h3>
		<p>
    We have built an App that shows Scotland off in a modern and interactive directive. 
    Our app allows carers to tarck and view attractions all over Scotland to see the accessability and information of each attraction.  
		</p>
	</li>
  <li>
		<h4>How?</h4>
		<h3>Software</h3>
		<p>
    To set up our database we used java and spring to create an API that we could use in the front end.
    Our frontend was built using JavaScript and React with different dependencies.
		</p>
	</li>
	<li>
		<h4>Who?</h4>
		<h3>Developers</h3>
    <div className="developers">
		<p>
    <a href="https://github.com/cameronjwils">Cameron Wilson</a>
    </p>
    <p>
    <a href="https://github.com/simbobs">Simona Demarco</a>
    </p>
    <p>
    <a href="https://github.com/jonnyhoudini">Jonny Houdin-McAveety</a>
    </p>
    <p>
    <a href="https://github.com/DevMcClure">Devan McClure</a>
    </p>
    <p>
    <a href="https://github.com/louarchibald">Louise Archibald</a>
		</p>
    </div>
	</li>
</ul>        
    </>
  )
}

export default About