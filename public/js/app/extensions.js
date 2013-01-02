String.prototype.replaceAll = function(token, newToken, ignoreCase) {
	var str, i = -1, _token;
	if((str = this.toString()) && typeof token === "string") {
		_token = ignoreCase === true? token.toLowerCase() : undefined;
		while((i = (
			_token !== undefined? 
			str.toLowerCase().indexOf(
				_token, 
				i >= 0? i + newToken.length : 0
				) : str.indexOf(
					token,
					i >= 0? i + newToken.length : 0
				)
			)) !== -1 ) {
				str = str.substring(0, i)
				.concat(newToken)
				.concat(str.substring(i + token.length));
			}
		}
		return str;
	};
	
String.prototype.toPermaLink = function() {
	var unsafeCharactersRegEx = /[^a-z0-9]*$/gi;
	var str = this.toString();
	return str.replace(unsafeCharactersRegEx, '').toLowerCase().replaceAll(' ','-');
}