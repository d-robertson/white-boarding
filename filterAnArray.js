// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var output = [];
    for (var y = 1; y < arguments.length; y++) {
        output.push(arguments[y]);
    }

    function destroy(value) {
        for (var x = 0; x < output.length; x++) {
            if (value === output[x]) {
                return false;
            }
        }
        return true;
    }
    return arr.filter(destroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);