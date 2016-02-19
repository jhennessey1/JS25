angular.module('chunkMod', []);
angular.module('chunkMod').controller('chunkTroller', ['$scope', function($scope){
	$scope.arr = []
	$scope.num = []
	var number = 1
	$scope.addPerson = function(){
		$scope.arr.push($scope.name)
		$scope.name = ""
		$scope.num.push(number)
		number ++
	}
	$scope.showGroups = function() {
		$scope.arrays = chunk($scope.arr, +$scope.groupDiv)
		$scope.showGroups = true
	}

	var chunk = function(arr, num) {
		var newArr = []
		var arrays = []
		if(arr.length % num === 0){
			var dif = arr.length / num
			while(arr.length > 0){
				newArr.push(arr.splice(0, dif))
				arrays.push(newArr)
				newArr = []
			}
		}
		else {
			while(arr.length > 0){
				var dif = Math.ceil(arr.length / num)
				newArr.push(arr.splice(0, dif))
				arrays.push(newArr)
				newArr = []
				num --
			}
		}
		return arrays
	}
}])



