
        //function 1
        function specifiedRandom(length) {
            var output = '';
            for (var i =0; i<length; i++) {
                output += Math.floor((Math.random() * 9)+1)
            }
            return output;

        }

        //function2
        function makeLower(str) {
            var result = '';
            for(var i=0; i<str.length; i++) {
                if (!isNaN(str[i]) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
                    result += str[i];
                }
                else {
                    var code = str.charCodeAt(i);
                    result+= String.fromCharCode(code + 32);
                }
            }
            return result;
        }




        //function 3
        function addSpace(str, space) {
            var output = str;
            for (var i = 0; i<space; i++) {
                output += ' ';
            }
            return output;
        }

        //function 4
        function reversedCodes(str){
            var temp = new Array();
            var result = new Array();
            var k =0;
            for(var i = str.length-1; i>=0; i--) {
                result[k] = str.charCodeAt(i);
                k++;
            }
            return result;
        }

        //function 5
        function combAtIndex(str1, str2, i) {
            var result = '';
            var k=0;
            var temp = 0;
            while(k != i) {
                result += str1[k];
                k++;
            }
            result += str2;
            for(var m=k; m < str1.length; m++) {
                result+=str1[m]
            }
            return result;
        }

        //function 6
        function plusMinus() {
            var k = 0;
            var x = arguments[0];
            for(var l = 1, m = 2; m < arguments.length ; l+=2, m+=2) {
                x += arguments[l];
                x -= arguments[m];
            }
            return x;
        }


        function unique(arr1, arr2) {
            var unique = [];
            var total = [];
            var sorted = [];
            var max = 0;
            var min = 0;
            if (arr1.length > arr2.length) {
                max = arr1;
                min = arr2;
            }
            else if(arr2.length>arr1.length) {
                max = arr2;
                min = arr1;
            }
            else  {
                max = arr1;
                min = arr2;
            }
            for (var i = 0; i<max.length; i++) {
                total[total.length] = max[i];
            }
            for (var i = 0; i<min.length; i++) {
                total[total.length] = min[i];
            }
            //sorting
            for(var i = 0; i< total.length; i++) {
                for(var k =i+1; k<total.length; k++) {
                    var min = 0;
                    if(total[i]>total[k]) {
                        min = total[i];
                        total[i] = total[k];
                        total[k] = min;
                    }
                }
            }
            var temp = 0;
            for(var i =1, j=0; i<total.length+1; i++) {
                if(total[i-1]==total[i]) temp=total[i-1];
                if(total[i-1]!=temp) unique[j++] = total[i-1];
            }
            return unique;
        }


        //function 8
        function isSmaller(ar, num) {
            var ctr = 0;
            for (var i =0; i<ar.length; i++) {
                if(ar[i] < num) {
                    ctr++;
                }
            }
            return ctr==ar.length;
        }

