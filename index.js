function rotate(elem) {
	let transform = elem.style.transform
	transform = transform.replace(/[^0-9]/g, '')
	let deg = transform != '' ? parseInt(transform) + 180 : 180

	elem.style.webkitTransform = 'rotate(' + deg + 'deg)'
	elem.style.mozTransform = 'rotate(' + deg + 'deg)'
	elem.style.msTransform = 'rotate(' + deg + 'deg)'
	elem.style.oTransform = 'rotate(' + deg + 'deg)'
	elem.style.transform = 'rotate(' + deg + 'deg)'
}

function toggle(elemId) {
	const elem = document.getElementById(elemId)
	const itemContainer = elem.firstElementChild
	const arrows = itemContainer.getElementsByClassName('item-arrow')
	const submenus = elem.getElementsByClassName('menu-submenu')

	if (arrows.length !== 0) {
		rotate(arrows[0])

		if (submenus.length !== 0) {
			if (submenus[0].style.display === 'none')
				submenus[0].style.display = 'block'
			else submenus[0].style.display = 'none'
		}
	}
}