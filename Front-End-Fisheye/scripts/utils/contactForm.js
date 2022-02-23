
function closeModalCarousel() {
	//document.querySelector("#carousel1").remove()
	window.location.reload()
}

function modals() {
	//Pour la modal du formulaire
	
	const triggers = document.querySelectorAll('[aria-haspopup="dialog"]')/*Le bouton qui ouvre la modal */
	const doc = document.querySelector('.button_modal')/*La div qui contient le bouton haut dessus*/
	const focusableElementsArray = [
	  '[href]',
	  'button:not([disabled])',
	  'input:not([disabled])',
	  'select:not([disabled])',
	  'textarea:not([disabled])',
	  '[tabindex]:not([tabindex="-1"])',
	]
	const keyCodes = {
	  tab: 9,
	  enter: 13,
	  escape: 27,
	}
	
	
	///////////////Ouverture de la modal FORM
	const open = function (dialog) {/*dailog est la div arrière de mon form */
		const focusableElements = dialog.querySelectorAll(focusableElementsArray)/*Correspond a tout les élémentd focusable dans la modale */
		const firstFocusableElement = focusableElements[0]/*Le bouton X ou la croix qui permet de fermer la modal */
		const lastFocusableElement = focusableElements[focusableElements.length - 1]/*Permet de séléctionné le bouton valider et que soit soit le dernier focusable*/
	
		dialog.setAttribute('aria-hidden', false)
		doc.setAttribute('aria-hidden', true)
	
		// return if no focusable element
		if (!firstFocusableElement) {
			return
		}
	
		window.setTimeout(() => {
			firstFocusableElement.focus()
	
			// trapping focus inside the dialog
			focusableElements.forEach((focusableElement) => {
			if (focusableElement.addEventListener) {
				focusableElement.addEventListener('keydown', (event) => {
				const tab = event.which === keyCodes.tab
	
				if (!tab) {
					return
				}
	
				if (event.shiftKey) {
					if (event.target === firstFocusableElement) { // shift + tab //si tu arrive au premier element avec shift + tab alors retourne le focus a lastFocusableElement
					event.preventDefault()
	
					lastFocusableElement.focus()
					}
				} else if (event.target === lastFocusableElement) { // tab //si tu arrive au dernier element avec tab alors retourne le focus a firstFocusableElement
					event.preventDefault()
	
					firstFocusableElement.focus()
				}
				})
			}
			})
		}, 100)
	}
		///////////////Fin de l'Ouverture de la modal FORM
	
	const close = function (dialog, trigger) {
		dialog.setAttribute('aria-hidden', true)
		doc.setAttribute('aria-hidden', false)
	
		// restoring focus
		trigger.focus()
	}
	
		triggers.forEach((trigger) => {
		const dialog = document.getElementById(trigger.getAttribute('aria-controls'))/*ajoute l'attribut aria-controls a la div arrière de la modal */
		const dismissTriggers = dialog.querySelectorAll('[data-dismiss]')/*Le bouton de la croix dnas la modal */
	
		// open dialog
		trigger.addEventListener('click', (event) => {// au click sur le bouton ouvrir ma modal tu execute la fonction open
			event.preventDefault()	
			open(dialog)
		})
	
		trigger.addEventListener('keydown', (event) => {// au press de la touche entrer sur le bouton ouvrir ma modal tu execute la fonction open
			if (event.which === keyCodes.enter) {/*event.which correspond au resultat de la touche actionner de la souris, du keycode, ou charcode*/
			event.preventDefault()
	
			open(dialog)
			}
		})
	
		// close dialog
		dialog.addEventListener('keyup', (event) => {// au relachement de la touche entrer sur le bouton X ma modal tu execute la fonction close
			if (event.which === keyCodes.escape) {
			close(dialog, trigger)
			}
		})
	
		dismissTriggers.forEach((dismissTrigger) => {// c'est le bouton X
			const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss)//on va chercher dans dismissTrigger son dataset et dans dataset on va chercher la valeur de son dismiss qui est dialog
	
			dismissTrigger.addEventListener('click', (event) => {
			event.preventDefault()
	
			close(dismissDialog, trigger)
			})
		})
	
		window.addEventListener('click', (event) => {// permet de fermer la modal en cliquant sur le la div arrière de modal
			if (event.target === dialog) {
			close(dialog, trigger)
			}
		})
	})
}