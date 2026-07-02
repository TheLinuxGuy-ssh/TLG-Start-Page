import React, { useRef, useState, useEffect, useCallback } from "react"
import { useSettings } from "@/context/settings"

const throttle = (f) => {
	let token = null,
		lastArgs = null
	const invoke = () => {
		f(...lastArgs)
		token = null
	}
	const result = (...args) => {
		lastArgs = args
		if (!token) token = requestAnimationFrame(invoke)
	}
	result.cancel = () => token && cancelAnimationFrame(token)
	return result
}

const id = (x) => x

const useDraggable = ({ onDrag = id } = {}) => {
	const [pressed, setPressed] = useState(false)
	const { settings } = useSettings()
	const position = useRef({ x: 0, y: 0 })
	const windowRef = useRef()
	const handleRef = useRef()
	const draggable = settings.terminal.draggable
	useEffect(() => {
		const windowElem = windowRef.current
		const handleElem = handleRef.current

		const el = windowRef.current
		if (!el) return

		const x = (window.innerWidth - el.offsetWidth) / 2
		const y = (window.innerHeight - el.offsetHeight) / 2

		position.current = { x, y }

		el.style.left = `${x}px`
		el.style.top = `${y}px`
		if (!handleElem) return

		const handleMouseDown = (e) => {
			if (!draggable) return

			if (
				e.target.classList.contains("window-btn-control") ||
				e.target.closest(".window-btn-control")
			)
				return

			if (e.button !== 0) return

			e.preventDefault()
			document.body.style.userSelect = "none"
			windowElem.classList.add("pressed")
			setPressed(true)
		}

		handleElem.addEventListener("mousedown", handleMouseDown)
		return () => {
			handleElem.removeEventListener("mousedown", handleMouseDown)
			document.body.style.userSelect = ""
		}
	}, [])

	useEffect(() => {
		if (!draggable || !pressed) return

		let lastX = null
		let lastY = null

		const handleMouseMove = throttle((event) => {
			if (!windowRef.current || !position.current) return

			if (lastX === null || lastY === null) {
				lastX = event.clientX
				lastY = event.clientY
				return
			}

			const deltaX = event.clientX - lastX
			const deltaY = event.clientY - lastY
			lastX = event.clientX
			lastY = event.clientY

			const pos = position.current
			const newPos = onDrag({
				x: pos.x + deltaX,
				y: pos.y + deltaY
			})
			position.current = newPos
			const elem = windowRef.current
			elem.style.left = `${newPos.x}px`
			elem.style.top = `${newPos.y}px`
		})

		const handleMouseUp = () => {
			lastX = null
			lastY = null
			document.body.style.userSelect = ""
			const ele = windowRef.current
			ele.classList.remove("pressed")
			setPressed(false)
		}

		document.addEventListener("mousemove", handleMouseMove)
		document.addEventListener("mouseup", handleMouseUp)

		return () => {
			handleMouseMove.cancel()
			document.removeEventListener("mousemove", handleMouseMove)
			document.removeEventListener("mouseup", handleMouseUp)
		}
	}, [draggable, pressed, onDrag])

	return [windowRef, handleRef, pressed]
}

const Window = ({
	uid,
	type,
	minw,
	minh,
	maxw,
	maxh,
	children,
	zIndex,
	bringToFront,
	appMeta,
	onClose,
	onMinimize,
	onMaximize,
	className
}) => {
	const settings = useSettings()
	const handleDrag = useCallback(({ x, y }) => {
		const el = windowRef.current
		if (!el) return { x, y }

		const maxX = window.innerWidth - el.offsetWidth
		const maxY = window.innerHeight - el.offsetHeight

		return {
			x: Math.min(Math.max(0, x), maxX),
			y: Math.min(Math.max(0, y), maxY)
		}
	}, [])
	const [windowRef, topbarRef] = useDraggable({ onDrag: handleDrag })
	return (
		<div
			id={`window`}
			ref={windowRef}
			style={{
				zIndex,
				position: "absolute",
				minWidth: minw,
				minHeight: minh,
				maxWidth: maxw,
				maxHeight: maxh
			}}
			className={`window window-glow bg-window-color liquidGlass-wrapper ${type === "popup" ? "popup" : ""} ${className}`}
			onMouseDown={() => bringToFront && bringToFront(uid)}
			type={type}>
			<div ref={topbarRef} className="window-topbar">
				<div className="window-topbar-buttons">
					{appMeta?.Icon && (
						<img src={appMeta.Icon} alt={appMeta.Name} className="window-icon hidden" />
					)}
					<span className="window-title hidden">{appMeta?.Name}</span>
					<div
						className="window-btn close window-btn-control"
						onMouseDown={(e) => e.stopPropagation()}
						onClick={(e) => {
							e.stopPropagation()
							onClose?.()
						}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="9"
							height="9"
							viewBox="0 0 9 9">
							<line
								x1="2"
								y1="2"
								x2="7"
								y2="7"
								stroke="#3E3E3E"
								strokeWidth="1.3"
								strokeLinecap="round"
							/>
							<line
								x1="7"
								y1="2"
								x2="2"
								y2="7"
								stroke="#3E3E3E"
								strokeWidth="1.3"
								strokeLinecap="round"
							/>
						</svg>
					</div>
					{type === "popup" ? (
						""
					) : (
						<>
							<div
								className="window-btn minimise"
								onMouseDown={(e) => e.stopPropagation()}
								onClick={(e) => {
									e.stopPropagation()
									onMinimize?.()
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="9"
									height="9"
									viewBox="0 0 9 9">
									<line
										x1="2.3"
										y1="4.5"
										x2="6.7"
										y2="4.5"
										stroke="#3E3E3E"
										strokeWidth="1.3"
										strokeLinecap="round"
									/>
								</svg>
							</div>
							<div
								className="window-btn maximise window-btn-control"
								onMouseDown={(e) => e.stopPropagation()}
								onClick={(e) => {
									e.stopPropagation()
									onMaximize?.()
								}}>
								<img src="./close.svg" className="window-btn-maximise" alt="" />
							</div>
						</>
					)}
				</div>
			</div>
			<div className="window-content">{children}</div>
		</div>
	)
}

export default Window
