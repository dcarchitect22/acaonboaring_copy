export default {
	async getHRDistributionList(){
		let distribution_list =  await GetHRDistForLocation.run()
		console.log(distribution_list);
		return{
			'distribution_list':distribution_list[0].distribution_list
		}
	}, 

	async submitOnboardingSubmission(){
		// validate all the fields 
		let missing_fields = [];
		let time_stamp = Date.now();
		let string_val = await time_stamp.toString();

		await timestamp.setText(string_val)


		if(employee_name.text == "" || employee_name.text == undefined){
			missing_fields.push(("Employee Name"))
		}

		if(emp_location.selectedOptionLabel == "" || emp_location.selectedOptionLabel  == undefined){
			missing_fields.push(("Location"));
		}

		if(emp_department.selectedOptionLabel == "" || emp_department.selectedOptionLabel  == undefined){
			missing_fields.push(("Department"));
		}

		if(emp_position.selectedOptionLabel == "" || emp_position.selectedOptionLabel  == undefined){
			missing_fields.push(("Position"));
		}

		if(candidate_phone.text == "" || candidate_phone.text == undefined){
			missing_fields.push("Phone Number")
		}

		if(candidate_address_line_one.text == "" || candidate_address_line_one.text == undefined){
			missing_fields.push("Address Line 1")
		}

		if(candidate_city.text == "" || candidate_city.text == undefined){
			missing_fields.push("City")
		}
		if(candidate_state.text == "" || candidate_state.text == undefined){
			missing_fields.push("State")
		}
		if(candidate_zip.text == "" || candidate_zip.text == undefined){
			missing_fields.push("Zip Code")
		}
		if(candidate_dob.selectedDate == "" || candidate_dob.selectedDate == undefined){
			missing_fields.push("Date of Birth")
		}

		if(pay_schedule.selectedOptionLabel == "" || pay_schedule.selectedOptionLabel == undefined){
			missing_fields.push("Pay Schedule")
		}

		if(pay_rate.text == "" || pay_rate.text == undefined){
			if((pay_schedule.selectedOptionLabel == "Hourly" || pay_schedule.selectedOptionLabel=="Flat Rate")){
							missing_fields.push("Pay Rate")
			}
		}

		let message = `Please Enter Values for the Follwing Field(s): ${missing_fields.toString()} `

		if(missing_fields.length >= 1){
			let at = await accessTokenParse.parseAccessToken();
			//let sub = at.sub;
			//showAlert(sub, 'error')
			showAlert(message, 'error');
		}
		else{
			PostPCNSubmission.run();
			InsertPCNDynamo.run();
			//showAlert('Onboarding Request Submitted');
			showModal(submit_modal.name);
			//resetWidget('onboarding_widget', true),
			resetWidget('employmentInfo', true);
			resetWidget('candidateInfo', true);
		}
	},

	async syncTimestamp(){
		let time_stamp = Date.now();
		return{
			'time_stamp': time_stamp
		}
	},
	async getsyncdTimestamp(){

		let submission_time = timestamp.text;
		let numberval = parseInt(submission_time);
		return{
			'time_stamp': numberval
		}
	},
}