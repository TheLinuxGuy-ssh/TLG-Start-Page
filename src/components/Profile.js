import { useSettings } from "@/context/settings"
import { fetchAsset } from "@/utils/fetchAsset"
import { useEffect, useState } from "react"

const Profile = () => {
	const { settings } = useSettings()
	const [icon, setIcon] = useState(null)
	useEffect(() => {
		// Fetch fetch image
		fetchAsset(settings.fetch.image)
			.then((data) => {
				if (data) {
					setIcon(data) // Set the image only if there is no warning message
				}
			})
			.catch((error) => {
				console.error("Failed to fetch image:", error)
			})
	}, [settings.fetch.image, setIcon])
	return (
		<>
			<img
				className={
					(settings.profile.enable ? `` : `hidden`) +
					` profile-logo left-1/2 absolute transform -translate-x-1/2 top-6 z-[-1] w-[8rem]`
				}
				style={{ boxShadow: "0 0 60px -15px " + settings.profile.glowColor }}
				src={icon}
				alt="profile-img"
			/>
		</>
	)
}

export default Profile
