import { useSettings } from "@/context/settings"
import useFetchData from "@/hooks/useFetchData"

const Prompt = ({ command, showSymbol = true }) => {
	const { settings } = useSettings()
	const [browserData] = useFetchData()
	const lower_username = settings.username.toLowerCase()
	const promptSettings = settings.prompt

	return (
		<span className="prompt flex shrink-0 cursor-default items-center whitespace-nowrap overflow-hidden max-w-[45%] sm:max-w-none">
			<span className={`prompt-user text-${promptSettings.userColor} truncate`}>
				{lower_username}
			</span>
			<span className={`text-${promptSettings.atColor}`}>@</span>
			<span className={`prompt-host text-${promptSettings.hostColor} truncate`}>
				{browserData.browserLower}
			</span>
			{showSymbol && (
				<span className={`text-${promptSettings.promptColor} ml-2 shrink-0`}>
					{" "}
					{promptSettings.promptSymbol}{" "}
				</span>
			)}
			{command && <span className="ml-2.5 text-textColor shrink-0">{command}</span>}
		</span>
	)
}

export default Prompt
