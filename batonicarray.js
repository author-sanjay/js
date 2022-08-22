const assending=(target,arr, left, right)=>{
    if(left<=right){
        var mid=parseInt((left+right)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            return assending(target,arr,mid+1,right)
        }else{
            return assending(target,arr,left,mid-1)
        }
    }
    return -1;
}

const batonicarr=(arr,left,right)=>{
    if(left<=right){
        var mid= parseInt((left+right)/2);
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            return mid;
        }
        if(arr[mid]<arr[mid+1]){
            return batonicpoint(arr,mid+1,right)
        }else{
            return batonicpoint(arr,left,mid-1)
        }
    }

    return -1;
}

var arr2=[]
const findelement=(target,arr,n)=>{
    const batonicpoint=batonicarr(arr,1,n-1);
    if(target>arr[batonicpoint]){
        return -1;
    }
    if(target==arr[batonicpoint]){
        return batonicpoint;
    }
    else{
        var found=assending(target,arr,0,batonicpoint-1)+1
        var found2=assending(target,arr,batonicpoint+1,n-1)+1
        console.log(found+" "+found2)
        if(found!==-1){
            arr2.push(parseInt(found))
        }
        if(found2!==-1){
            arr2.push(parseInt(found2))
        }
    }
}

var arr=[10,20,30,40,50,60,55,45,50,25,15];
var n=arr.length;
// console.log(arr[n-1])
findelement(50,arr,n)
for(let ele of arr2){
    console.log(ele)
}
