import { m, sourceTextKeys } from '../src/paraglide/messages.js'
import { getLocale, setLocale } from '../src/paraglide/runtime.js'

const validLocales = new Set(['en', 'fr'])
const textNodeKeys = new WeakMap()
const translatableAttributes = [
	'alt',
	'aria-label',
	'content',
	'placeholder',
	'title',
]

function normalizeText(text) {
	return text.replace(/\s+/g, ' ').trim()
}

function applyPreservedSpacing(original, translated) {
	const leading = original.match(/^\s*/)?.[0] || ''
	const trailing = original.match(/\s*$/)?.[0] || ''
	return `${leading}${translated}${trailing}`
}

function getMessage(key) {
	return typeof m[key] === 'function' ? m[key]() : ''
}

function rememberTextNodeKey(node) {
	if (textNodeKeys.has(node)) return textNodeKeys.get(node)
	const key = sourceTextKeys[normalizeText(node.textContent)]
	if (key) textNodeKeys.set(node, key)
	return key
}

function translateTextNodes(root = document.body) {
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement
			if (!parent) return NodeFilter.FILTER_REJECT
			if (parent.closest('script, style, svg'))
				return NodeFilter.FILTER_REJECT
			return normalizeText(node.textContent)
				? NodeFilter.FILTER_ACCEPT
				: NodeFilter.FILTER_REJECT
		},
	})

	const nodes = []
	while (walker.nextNode()) nodes.push(walker.currentNode)

	nodes.forEach((node) => {
		const key = rememberTextNodeKey(node)
		if (key)
			node.textContent = applyPreservedSpacing(
				node.textContent,
				getMessage(key)
			)
	})
}

function translateAttributes() {
	translatableAttributes.forEach((attribute) => {
		document.querySelectorAll(`[${attribute}]`).forEach((element) => {
			const dataKey = `i18n${attribute.replace(/(^|-)([a-z])/g, (_, __, char) => char.toUpperCase())}Auto`
			const currentKey = element.dataset[dataKey]
			const source = element.getAttribute(attribute)
			const key =
				currentKey || sourceTextKeys[normalizeText(source || '')]
			if (!key) return
			element.dataset[dataKey] = key
			element.setAttribute(attribute, getMessage(key))
		})
	})
}

function translateDataAttributes() {
	document.querySelectorAll('[data-i18n]').forEach((element) => {
		element.textContent = getMessage(element.getAttribute('data-i18n'))
	})

	document.querySelectorAll('[data-i18n-html]').forEach((element) => {
		element.innerHTML = getMessage(element.getAttribute('data-i18n-html'))
	})

	document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
		element.setAttribute(
			'placeholder',
			getMessage(element.getAttribute('data-i18n-placeholder'))
		)
	})
}

function updateLanguageSelects() {
	const locale = getLocale()
	document.querySelectorAll('[data-locale-select]').forEach((select) => {
		select.value = locale
	})
}

function setDocumentMetadata() {
	const path = window.location.pathname
	const isPilot = path.endsWith('/pilot.html') || path.endsWith('pilot.html')
	const titleKey = isPilot ? 'pilot_title' : 'site_title'
	const descriptionKey = isPilot ? 'pilot_description' : 'site_description'
	document.documentElement.lang = getLocale()
	document.title = getMessage(titleKey)
	document
		.querySelector("meta[name='description']")
		?.setAttribute('content', getMessage(descriptionKey))
}

export function renderTranslations() {
	setDocumentMetadata()
	translateDataAttributes()
	translateTextNodes()
	translateAttributes()
	updateLanguageSelects()
}

function initLocale() {
	const storedLocale = localStorage.getItem('locale')
	setLocale(validLocales.has(storedLocale) ? storedLocale : 'en')
}

function initLanguageToggle() {
	document.querySelectorAll('[data-locale-select]').forEach((select) => {
		select.addEventListener('change', () => {
			const locale = select.value
			if (!validLocales.has(locale)) return
			setLocale(locale)
			localStorage.setItem('locale', locale)
			renderTranslations()
		})
	})
}

function injectLanguageToggleStyles() {
	const style = document.createElement('style')
	style.textContent = `
    .language-toggle {
      display: inline-flex;
      align-items: center;
    }

    .header-controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .nav-links .language-toggle {
      margin: 1.875rem auto;
    }

    .nav-language-toggle {
      display: none;
    }

    .language-toggle select {
      border: 1px solid #016143;
      background: #ffffff;
      color: #016143;
      border-radius: 999px;
      padding: 0.4rem 0.65rem;
      font: inherit;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;
    }

    @media screen and (min-width: 46.9em) {
      .header-language-toggle {
        display: none;
      }

      .nav-links .language-toggle {
        margin: 0;
      }

      .nav-language-toggle {
        display: inline-flex;
      }
    }
  `
	document.head.appendChild(style)
}

initLocale()

document.addEventListener('DOMContentLoaded', function () {
	injectLanguageToggleStyles()
	initLanguageToggle()
	renderTranslations()

	console.log('Carousel script started.')

	const carouselContainer = document.querySelector('.js-carousel-container')
	const track = document.querySelector('.js-carousel-track')
	const moreMythsBtn = document.getElementById('moreMythsBtn')

	if (!carouselContainer || !track || !moreMythsBtn) {
		console.log('Carousel elements not found. Skipping carousel setup.')
		return
	}

	const originalCards = Array.from(track.children)
	const numOriginalCards = originalCards.length

	const CAROUSEL_MIN_WIDTH = 951 // Carousel switches off for mobile
	let isCarouselActive = false
	let mql

	let currentIndex = 0
	let cardWidthWithMargin = 0
	let totalTrackPixelWidth = 0
	let isTransitioning = false
	let isDragging = false
	const transitionSpeed = 600
	const EASING_FUNCTION = 'ease-in-out'
	const initialLeftOffsetPercentage = 0.07

	let dragStartX = 0,
		dragStartY = 0,
		dragStartTranslateX = 0,
		currentPointerId = null

	function calculateDimensions() {
		if (!isCarouselActive || numOriginalCards === 0) {
			cardWidthWithMargin = 0
			totalTrackPixelWidth = 0
			return
		}
		const firstCard = originalCards[0]
		const firstCardStyle = window.getComputedStyle(firstCard)
		const firstCardMarginRight = parseFloat(firstCardStyle.marginRight) || 0
		cardWidthWithMargin = firstCard.offsetWidth + firstCardMarginRight

		totalTrackPixelWidth = 0
		for (let i = 0; i < numOriginalCards; i++) {
			totalTrackPixelWidth += originalCards[i].offsetWidth
			if (i < numOriginalCards - 1) {
				const currentCardStyle = window.getComputedStyle(
					originalCards[i]
				)
				totalTrackPixelWidth +=
					parseFloat(currentCardStyle.marginRight) || 0
			}
		}
		if (cardWidthWithMargin === 0 && numOriginalCards > 1)
			console.warn('Active Carousel: Card width (step) is 0.')
		if (totalTrackPixelWidth === 0 && numOriginalCards > 0)
			console.warn('Active Carousel: Total track pixel width is 0.')
	}

	function updateCarouselPosition(enableTransition = true) {
		if (!isCarouselActive || numOriginalCards === 0) return
		const containerWidth = carouselContainer.offsetWidth
		const leftOffsetPixels = containerWidth * initialLeftOffsetPercentage

		if (
			(cardWidthWithMargin === 0 && numOriginalCards > 1) ||
			(totalTrackPixelWidth === 0 && numOriginalCards > 0)
		) {
			calculateDimensions()
		}
		if (
			totalTrackPixelWidth === 0 &&
			numOriginalCards > 0 &&
			currentIndex > 0
		) {
			return
		}

		let newTransformX
		const finalDisplayIndex = numOriginalCards - 1
		const canAllContentFitWithSymmetricPadding =
			totalTrackPixelWidth + 2 * leftOffsetPixels <= containerWidth
		const noScrollPossibleOrNeeded =
			numOriginalCards <= 1 ||
			(canAllContentFitWithSymmetricPadding && totalTrackPixelWidth > 0)

		if (noScrollPossibleOrNeeded) {
			newTransformX = leftOffsetPixels
		} else {
			if (currentIndex === 0) {
				newTransformX = leftOffsetPixels
			} else if (currentIndex === finalDisplayIndex) {
				newTransformX =
					containerWidth - totalTrackPixelWidth - leftOffsetPixels
			} else {
				if (cardWidthWithMargin === 0 || totalTrackPixelWidth === 0) {
					newTransformX = leftOffsetPixels
				} else {
					let idealIntermediateTransform =
						leftOffsetPixels - currentIndex * cardWidthWithMargin
					let finalTrackStopTransform =
						containerWidth - totalTrackPixelWidth - leftOffsetPixels
					newTransformX = Math.max(
						idealIntermediateTransform,
						finalTrackStopTransform
					)
				}
			}
		}
		track.style.transition = enableTransition
			? `transform ${transitionSpeed / 1000}s ${EASING_FUNCTION}`
			: 'none'
		track.style.transform = `translateX(${newTransformX}px)`
	}

	function handleMoreMythsClick() {
		if (
			!isCarouselActive ||
			isTransitioning ||
			isDragging ||
			numOriginalCards === 0
		)
			return
		if (
			(cardWidthWithMargin === 0 && numOriginalCards > 1) ||
			(totalTrackPixelWidth === 0 && numOriginalCards > 0)
		) {
			calculateDimensions()
			if (
				(cardWidthWithMargin === 0 && numOriginalCards > 1) ||
				(totalTrackPixelWidth === 0 && numOriginalCards > 0)
			) {
				console.error(
					'Critical dimensions missing after recalc. Cannot move carousel.'
				)
				return
			}
		}
		isTransitioning = true
		const finalDisplayIndex = numOriginalCards - 1
		if (numOriginalCards <= 1) {
			currentIndex = 0
		} else if (numOriginalCards === 2) {
			if (currentIndex === 0) {
				currentIndex = finalDisplayIndex
			} else {
				currentIndex = 0
			}
		} else {
			const pivotIndexBeforeFinal = numOriginalCards - 3
			if (currentIndex === finalDisplayIndex) {
				currentIndex = 0
			} else if (currentIndex === pivotIndexBeforeFinal) {
				currentIndex = finalDisplayIndex
			} else {
				currentIndex++
			}
		}
		updateCarouselPosition(true)
		setTimeout(() => {
			isTransitioning = false
		}, transitionSpeed)
	}

	function handleDragStart(e) {
		if (!isCarouselActive || isTransitioning || numOriginalCards === 0)
			return
		const containerWidth = carouselContainer.offsetWidth
		const leftOffsetPixels = containerWidth * initialLeftOffsetPercentage
		const canAllContentFit =
			totalTrackPixelWidth + 2 * leftOffsetPixels <= containerWidth
		if (
			numOriginalCards <= 1 ||
			(canAllContentFit && totalTrackPixelWidth > 0)
		) {
			isDragging = false
			return
		}
		isDragging = true
		const isTouchEvent = e.type === 'touchstart'
		dragStartX = isTouchEvent ? e.touches[0].pageX : e.pageX
		if (isTouchEvent) dragStartY = e.touches[0].pageY

		const computedStyle = window.getComputedStyle(track)
		const transformMatrix = new DOMMatrixReadOnly(computedStyle.transform)
		dragStartTranslateX = transformMatrix.m41

		if (computedStyle.transform === 'none' || isNaN(dragStartTranslateX)) {
			const finalDisplayIndex = numOriginalCards - 1
			const noScrollPossibleOrNeeded =
				numOriginalCards <= 1 ||
				(canAllContentFit && totalTrackPixelWidth > 0)

			if (noScrollPossibleOrNeeded) {
				dragStartTranslateX = leftOffsetPixels
			} else {
				if (currentIndex === 0) {
					dragStartTranslateX = leftOffsetPixels
				} else if (currentIndex === finalDisplayIndex) {
					dragStartTranslateX =
						containerWidth - totalTrackPixelWidth - leftOffsetPixels
				} else {
					if (
						cardWidthWithMargin === 0 ||
						totalTrackPixelWidth === 0
					) {
						dragStartTranslateX = leftOffsetPixels
					} else {
						let idealIntermediateTransform =
							leftOffsetPixels -
							currentIndex * cardWidthWithMargin
						let finalTrackStopTransform =
							containerWidth -
							totalTrackPixelWidth -
							leftOffsetPixels
						dragStartTranslateX = Math.max(
							idealIntermediateTransform,
							finalTrackStopTransform
						)
					}
				}
			}
		}
		track.style.transition = 'none'
		if (isTouchEvent) {
			currentPointerId = e.touches[0].identifier
			window.addEventListener('touchmove', handleDragMove, {
				passive: false,
			})
			window.addEventListener('touchend', handleDragEnd)
			window.addEventListener('touchcancel', handleDragEnd)
		} else {
			document.body.style.userSelect = 'none'
			carouselContainer.style.cursor = 'grabbing'
			window.addEventListener('mousemove', handleDragMove)
			window.addEventListener('mouseup', handleDragEnd)
		}
	}

	function handleDragMove(e) {
		if (!isCarouselActive || !isDragging) return
		// ... (rest of handleDragMove logic remains the same)
		let currentX, currentY
		const isTouchEvent = e.type === 'touchmove'
		if (isTouchEvent) {
			const touch = Array.from(e.touches).find(
				(t) => t.identifier === currentPointerId
			)
			if (!touch) return
			currentX = touch.pageX
			currentY = touch.pageY
			const deltaX = Math.abs(currentX - dragStartX)
			const deltaY = Math.abs(currentY - dragStartY)
			if (deltaX > deltaY && e.cancelable) e.preventDefault()
		} else {
			currentX = e.pageX
		}
		const draggedDistance = currentX - dragStartX
		track.style.transform = `translateX(${dragStartTranslateX + draggedDistance}px)`
	}

	function handleDragEnd() {
		if (!isCarouselActive || !isDragging) return
		// ... (rest of handleDragEnd logic remains the same)
		isDragging = false
		window.removeEventListener('touchmove', handleDragMove)
		window.removeEventListener('touchend', handleDragEnd)
		window.removeEventListener('touchcancel', handleDragEnd)
		document.body.style.userSelect = ''
		carouselContainer.style.cursor = 'grab' // Will be reset if needed by deactivateCarousel
		window.removeEventListener('mousemove', handleDragMove)
		window.removeEventListener('mouseup', handleDragEnd)
		currentPointerId = null

		const currentActualTranslateX =
			parseFloat(
				track.style.transform
					.replace('translateX(', '')
					.replace('px)', '')
			) || dragStartTranslateX
		const leftOffsetPixels =
			carouselContainer.offsetWidth * initialLeftOffsetPercentage
		let newIndex
		let closestIndex = 0
		let minDistance = Infinity
		const finalDisplayIndex = numOriginalCards - 1

		for (let i = 0; i < numOriginalCards; i++) {
			let targetTransformForI
			const containerWidth = carouselContainer.offsetWidth
			const noScrollPossibleOrNeeded =
				numOriginalCards <= 1 ||
				(totalTrackPixelWidth + 2 * leftOffsetPixels <=
					containerWidth &&
					totalTrackPixelWidth > 0)

			if (noScrollPossibleOrNeeded) {
				targetTransformForI = leftOffsetPixels
			} else {
				if (i === 0) {
					targetTransformForI = leftOffsetPixels
				} else if (i === finalDisplayIndex) {
					targetTransformForI =
						containerWidth - totalTrackPixelWidth - leftOffsetPixels
				} else {
					if (
						cardWidthWithMargin === 0 ||
						totalTrackPixelWidth === 0
					) {
						targetTransformForI = leftOffsetPixels
					} else {
						let idealIntermediateTransform =
							leftOffsetPixels - i * cardWidthWithMargin
						let finalTrackStopTransform =
							containerWidth -
							totalTrackPixelWidth -
							leftOffsetPixels
						targetTransformForI = Math.max(
							idealIntermediateTransform,
							finalTrackStopTransform
						)
					}
				}
			}
			const distance = Math.abs(
				currentActualTranslateX - targetTransformForI
			)
			if (distance < minDistance) {
				minDistance = distance
				closestIndex = i
			}
		}
		newIndex = closestIndex
		currentIndex = newIndex
		updateCarouselPosition(true)
		isTransitioning = true
		setTimeout(() => {
			isTransitioning = false
		}, transitionSpeed)
	}

	function activateCarousel() {
		if (isCarouselActive || numOriginalCards === 0) return
		console.log('Activating carousel functionality.')
		isCarouselActive = true

		calculateDimensions()
		currentIndex = 0 // Reset to first card on activation
		updateCarouselPosition(false)

		const containerWidth = carouselContainer.offsetWidth
		const leftOffsetPixels = containerWidth * initialLeftOffsetPercentage
		const canAllContentFit =
			totalTrackPixelWidth + 2 * leftOffsetPixels <= containerWidth
		if (
			!(
				numOriginalCards <= 1 ||
				(canAllContentFit && totalTrackPixelWidth > 0)
			)
		) {
			carouselContainer.style.cursor = 'grab'
		} else {
			carouselContainer.style.cursor = 'default'
		}

		// Event listeners are already attached, they just check isCarouselActive
	}

	function deactivateCarousel() {
		if (!isCarouselActive) return
		console.log('Deactivating carousel functionality.')
		isCarouselActive = false

		track.style.transform = ''
		track.style.transition = ''
		// track.style.display = ''; // Let CSS handle display for vertical stack

		carouselContainer.style.cursor = 'default'
		if (isDragging) {
			// Clean up if drag was somehow interrupted
			document.body.style.userSelect = ''
			isDragging = false
			// Remove global listeners if any were missed by a quick deactivate
			window.removeEventListener('touchmove', handleDragMove)
			window.removeEventListener('touchend', handleDragEnd)
			window.removeEventListener('touchcancel', handleDragEnd)
			window.removeEventListener('mousemove', handleDragMove)
			window.removeEventListener('mouseup', handleDragEnd)
		}
	}

	function handleBreakpointChange(event) {
		if (event.matches) {
			activateCarousel()
		} else {
			deactivateCarousel()
		}
	}

	// Initial setup
	if (numOriginalCards > 0) {
		// Only setup if there are cards
		mql = window.matchMedia(`(min-width: ${CAROUSEL_MIN_WIDTH}px)`)
		mql.addEventListener('change', handleBreakpointChange)

		// Initial check
		if (mql.matches) {
			activateCarousel()
		} else {
			deactivateCarousel() // Ensure it's reset if starting small
		}

		moreMythsBtn.addEventListener('click', handleMoreMythsClick)
		carouselContainer.addEventListener('mousedown', handleDragStart)
	} else {
		console.log('No cards to initialize carousel for.')
	}

	let resizeTimeout
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout)
		resizeTimeout = setTimeout(() => {
			if (isCarouselActive) {
				calculateDimensions()
				updateCarouselPosition(false) // Re-apply position instantly

				const containerWidth = carouselContainer.offsetWidth
				const leftOffsetPixels =
					containerWidth * initialLeftOffsetPercentage
				const canAllContentFit =
					totalTrackPixelWidth + 2 * leftOffsetPixels <=
					containerWidth
				carouselContainer.style.cursor =
					!(
						numOriginalCards <= 1 ||
						(canAllContentFit && totalTrackPixelWidth > 0)
					) && numOriginalCards > 0
						? 'grab'
						: 'default'
			} else {
				console.log('Window resized (carousel inactive).')
			}
		}, 250)
	})

	console.log('Carousel should be good')
})
function toggleMenu(button) {
	const nav = document.getElementById('navMenu')
	nav.classList.toggle('show')
	button.classList.toggle('active')
}

window.toggleMenu = toggleMenu

document.querySelectorAll('#navMenu a').forEach((link) => {
	link.addEventListener('click', () => {
		document.getElementById('navMenu').classList.remove('show')
		document.querySelector('.hamburger').classList.remove('active')
	})
})
