/* eslint-disable */
var findCities = function (provinceList, provinceName) {
	for (var i in provinceList) {
		if (provinceList[i].filename === provinceName) {
			return provinceList[i];
		}
	}
	return null;
}

export {
	findCities
}
