import axios from 'axios';


const instance = axios.create({
})

export const feedbackApi = {
	sendMessage(values: ValuesType) {
		return instance.post(`sendMessage`, {values})
	}
}

type ValuesType = {
	name?: string
	email?: string
	message?: string
}