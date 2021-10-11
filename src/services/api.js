import axios from "axios";

const api = axios.create({
	baseURL: "https://metis-back-default-rtdb.firebaseio.com"
});

export default api;