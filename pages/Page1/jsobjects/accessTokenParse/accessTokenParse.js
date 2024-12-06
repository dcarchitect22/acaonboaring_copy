export default {

	async parseAccessToken () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		try{
			//"access_token": appsmith.URL.queryParams["access_token"]
			let sub = appsmith.URL.queryParams['access_token'].split('.')[1];
			let utf = atob(sub);
			let json_obj = await JSON.parse(utf);
			let user = json_obj.sub;
			console.log(json_obj.sub);
			await storeValue('sub', json_obj.sub)
			return{
				"sub":user
			}

		}catch{
			return 1;
		}
		return{
			"message":"success"
		}

	}
}