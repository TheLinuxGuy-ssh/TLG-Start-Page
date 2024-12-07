import { useSettings } from "@/context/settings"

const Profile = () => {
    const { settings, setSettings, resetSettings } = useSettings()
    return (
    <>
    <img className={"profile-logo left-1/2 absolute transform -translate-x-1/2 top-6 z-[-1] w-[8rem] shadow shadow-[0_0_60px_-15px_" + settings.profile.glowColor + "]"} style={{boxShadow: "0 0 60px -15px " + settings.profile.glowColor + ";"}} src={settings.profile.dp} />
    </>
    );
};


export default Profile