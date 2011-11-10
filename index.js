/*Scripts for the demo page of -prefix-free*/
/*
	//declare the global function '$'
	//with the argument 'id'
	//which returns an Element that matches by its value of the attribute 'id' the delivered value of the argument 'id' when the function will be called
	//this is just a shorthand for the sake of not to write document.getElementById('myId') all the time you need to manipulate a specific element, to which the element identifiable by the id you want to call was assigned to
*/
this['$']
=
function
(id)
{
	return document.getElementById
	(id)
}
/*
	//this shorthand is lame;
	//it should prove that the delivered id is of type 'string'
	//because the DOM-method 'getelementById' needs the 'id' delivered as a 'string'
*/
;
(
	function()
	{
	//
		if
		(//if 'PrefixFree' was already declared under the window-object, so if it is a global variable and therefore returns true
			window['PrefixFree']
		)//then the following procedure will be run
		{
			var
				//declare variable 'source'
				source
			=
				$('source')
				//as reference to the element with the id 'source'
			,
				//declare variable 'prefixed'
				prefixed
			=
				$('prefixed')
				//as reference to the element with the id 'prefixed'
		;
			//define a function for the event-handler 'oninput' of the element with the id 'source', referenced via the variable 'source'
			source.oninput
			=
			function
			()
			{
			//set the value of the element with the id 'prefixed', referenced via the variable 'prefixed'
				prefixed.value
			=
				PrefixFree.prefixCSS
				(
					source.value
				,
					true
				)
			//to the value of the element with the id 'source', referenced via the variable 'source', after modification via the PrefixFree-method 'prefixCSS'
			}
		;
			(//define a function for the event-handler 'onscroll' of the element with the id 'source', referenced via the variable 'source'
				source.onscroll
			=
				function
				(
					//no arguments to be set, because it is an anonymous function, which has no preload
				)
				{
					(//set the value of 'scrollTop' of the element with the id 'prefixed', referenced by the variable 'prefixed'
						prefixed.scrollTop
					=
						source.scrollTop
					)//to the value of 'scrollTop' of the element with the id 'source', referenced by the variable 'source'
					/*
						//this action synchronizes the scroll-position of both textareas ('prefixed'|'source')
					*/
				}
			)
		}
	;
		(//define a function for the event-handler 'onhashchange' of the 'window'-object
			window.onhashchange
			=
			function
			()
			{
				var
					target
				,
					page
				,
					previousPage
			;
				if(location.hash)
				{
					page
				=
					target
				=
					document.querySelector
					(
						location.hash
					)
				;
					while
					(
						page
					&&
						(
							page.className
						!=
							'page'
						)
					)
					{
						(
							page
						=
							page.parentNode
						)
					}
				}
			;
				(
					previousPage
				=
					document.querySelector('.current.page')
				)
				&&
				(
					previousPage.className
				=
					'page'
				)
			;
				if
				(
					page
				)
				{
					(
						page.className
					=
						'current page'
					)
				;
					(
						document.body.className
					=
						'in-page'
					)
				}
				else
				{
					(
						document.body.className
					=
						'home'
					)
				}
			;
				if
				(
					target
				)
				{
					target.scrollIntoView(true)
				}
			}
		)
		()
	}
)
()
