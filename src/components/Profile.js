import { useSettings } from "@/context/settings"

const Profile = () => {
	const { settings } = useSettings()
	return (
		<>
			<img
				className={(settings.profile.enable ? `` : `hidden`) + ` profile-logo left-1/2 absolute transform -translate-x-1/2 top-6 z-[-1] w-[8rem]`}
				style={{ boxShadow: "0 0 60px -15px " + settings.profile.glowColor }}
				src={settings.profile.dp}
			/>
		</>
	)
}

export default Profile
