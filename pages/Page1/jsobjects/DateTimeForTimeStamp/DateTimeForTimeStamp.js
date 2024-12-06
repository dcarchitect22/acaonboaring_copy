export default {

	async getCurrentDateTime() {
		let current_time = Date.now();
		return{
			"timestamp":current_time
		}
	},

	async getUTFDate(time_stamp){
		let date = new Date(time_stamp);
		let month = String(date.getMonth() + 1).padStart(2, '0');
		let day = String(date.getDate()).padStart(2, '0');
		let year = date.getFullYear();
		return{
			'utf_date':`${month}/${day}/${year}`;
		}

	}
}