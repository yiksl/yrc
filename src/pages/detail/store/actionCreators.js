import axios from 'axios';
import * as constants from './constants';
export const getDetail = (id) => {
	return(dispatch) => {
		axios.get('/api/list.json').then((res)=>{
			let result = res.data.data.articleList[id-1];
			dispatch(changeDetail(result.Bussiness_name, result.advice, result.zipcode, result.stars,
				 result.city,result.advice2,result.star1,result.star2,result.star3,result.star4,result.star5));
		})
	}
}

const changeDetail = (Bussiness_name, advice, zipcode, stars, city,advice2, star1,star2,star3,star4,star5)=>({
	type: constants.CHANGE_DETAIL,
	Bussiness_name, advice, zipcode, city, stars,advice2, star1,star2,star3,star4,star5
})