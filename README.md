inplace.js
==========

a very light jQuery plugin for inplace editing title by Mojtaba kianifar

version: 1.0


## Features : 

* oncomplete() method for ajax call 
* very light plugin (4kb)
* simple usage


## Usage :

create Dom element : 

include inplace.js after jquery :

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script src="jquery.inplace.js"></script>
    
include inplace.css for button style : 

    <link rel="stylesheet" href="css/inplace.css">
    
and then use plugin :

	<script>
		$("h2").inplace ()
	</script>
	
##### you can attach oncomplete method for ajax save data in database like this :

	<script>
		$("h2").inplace ({
			oncomplete : function (){
				//ajax here 
			}
		})
	</script>
	
Dont Forget to view demo.html :)

## Connect :

website : http://mojtabakiani.ir
facebook : https://www.facebook.com/mojtaba.kianyfar


