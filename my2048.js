$(document).keydown(function(evt){
	evt=$(window).event?$(window).event:evt;
	if (evt.keyCode=='38' ){
		evt.preventDefault();
		up();
	}
	if(evt.keyCode=='40'){
		evt.preventDefault();
		down();
	}
	if(evt.keyCode=='39'){
		right();
	}
	if(evt.keyCode=='37'){
		left();
	}
});

//$('#st2048').click(function(){
        //$(this).css("visibility","hidden");
        //start2048();
        //alert("start2048");
//});
start2048();
var getArr=new Array();

function start2048(){
	var num=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var i=Math.floor(Math.random()*16);
	var j=i;
	while(i==j){
		j=Math.floor(Math.random()*16);
	}
	num[j]=num[i]=2;
	var strArr=num.toString();
	getArr = strArr.split(",");
	fresh();
}

function fresh(){
	for(var k=0;k<16;k++){
		if(getArr[k]!=0){
			document.getElementById(k).style.background="url(img/2048/"+getArr[k]+".png) no-repeat";
		}else{
			document.getElementById(k).style.background="#e6e6e6";
		}
	}
}

function randnum(){
	var n=0;
	for(var k=0;k<16;k++){
		if(getArr[k]!=0){
			n++;
		}
	}
	if(n!=16){
		while(1){
			var i=Math.floor(Math.random()*16);
			if(getArr[i]==0){
				var rn=Math.ceil(Math.random()*10);
				rn<=6?getArr[i]=2:getArr[i]=4;
				n++;
				break;
			}
		}
	}
	fresh();
	if(n==16){
		if(!check()){
			if(confirm("You lose!Restart?"))
				start2048();
		}
	}
	
}

function check(){
	var flag=1;
	for(var number=0;number<16;number++){
		var tmp=getArr[number];
		if(tmp!=0){
		var tmpup=getArr[number-4];
		var tmpdown=getArr[number+4];
		var tmpright=getArr[number+1];
		var tmpleft=getArr[number-1];
		if(number==0){
			(tmp==tmpdown || tmp==tmpright)?flag=1:flag=0;
		}
		else if(number==3){
			(tmp==tmpdown || tmp==tmpleft)?flag=1:flag=0;
		}
		else if(number==12){
			(tmp==tmpup || tmp==tmpright)?flag=1:flag=0;
		}
		else if(number==15){
			(tmp==tmpup || tmp==tmpleft)?flag=1:flag=0;
		}
		else if(number==1 || number==2){
			(tmp==tmpdown || tmp==tmpright || tmp==tmpleft)?flag=1:flag=0;
		}
		else if(number==4 || number==8){
			(tmp==tmpdown || tmp==tmpright || tmp==tmpup)?flag=1:flag=0;
		}
		else if(number==7 || number==11){
			(tmp==tmpdown || tmp==tmpup || tmp==tmpleft)?flag=1:flag=0;
		}
		else if(number==13 || number==14){
			(tmp==tmpup || tmp==tmpright || tmp==tmpleft)?flag=1:flag=0;
		}
		else if(number==5 || number==6 || number==9 || number==10){
			(tmp==tmpdown || tmp==tmpright || tmp==tmpleft || tmp==tmpup)?flag=1:flag=0;
		}
		if(flag==1)
			break;
	}
	}
	return flag;
}

function up(){
	var flag=0;
	for(var num=0;num<4;num++){
		if(getArr[num]!=0){
			if(getArr[num]==getArr[num+4]){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+4]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num+8] && getArr[num+4]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+8]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num+12] && getArr[num+4]==0 && getArr[num+8]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+12]=0;
				flag=1;
			}
			else if(getArr[num+4]==getArr[num+8] && getArr[num+4]!=0){
				getArr[num+4]=parseInt(getArr[num+4])*2;
				getArr[num+8]=0;
				flag=1;
			}
			else if(getArr[num+8]==getArr[num+12] && getArr[num+8]!=0){
				getArr[num+8]=parseInt(getArr[num+8])*2;
				getArr[num+12]=0;
				flag=1;
			}
			else if(getArr[num+4]==getArr[num+12] && getArr[num+4]!=0 && getArr[num+8]==0){
				getArr[num+4]=parseInt(getArr[num+4])*2;
				getArr[num+12]=0;
				flag=1;
			}
		} else {
			if(getArr[num+4]==getArr[num+8] && getArr[num+4]!=0){
				getArr[num+4]=parseInt(getArr[num+4])*2;
				getArr[num+8]=0;
				flag=1;
			}
			else if(getArr[num+8]==getArr[num+12] && getArr[num+8]!=0){
				getArr[num+8]=parseInt(getArr[num+8])*2;
				getArr[num+12]=0;
				flag=1;
			}
			else if(getArr[num+4]==getArr[num+12] && getArr[num+4]!=0 && getArr[num+8]==0){
				getArr[num+4]=parseInt(getArr[num+4])*2;
				getArr[num+12]=0;
				flag=1;
			}
		}

		for(var j=num;j<=num+8;j=j+4){
			if(getArr[j]==0){
				for(var i=j+4;i<16;i=i+4){
					if(getArr[i]!=0){
						getArr[j]=getArr[i];
						getArr[i]=0;
						flag=1;
						break;
					}
				}
			}
		}
	}
	fresh();
	if(flag==1){
		randnum();
	}
}

function down(){
	var flag=0;
	for(var num=12;num<16;num++){
		if(getArr[num]!=0){
			if(getArr[num]==getArr[num-4]){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-4]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num-8] && getArr[num-4]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-8]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num-12] && getArr[num-4]==0 && getArr[num-8]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-12]=0;
				flag=1;
			}
			else if(getArr[num-4]==getArr[num-8] && getArr[num-4]!=0){
				getArr[num-4]=parseInt(getArr[num-4])*2;
				getArr[num-8]=0;
				flag=1;
			}
			else if(getArr[num-8]==getArr[num-12] && getArr[num-8]!=0){
				getArr[num-8]=parseInt(getArr[num-8])*2;
				getArr[num-12]=0;
				flag=1;
			}
			else if(getArr[num-4]==getArr[num-12] && getArr[num-4]!=0 && getArr[num-8]==0){
				getArr[num-4]=parseInt(getArr[num-4])*2;
				getArr[num-12]=0;
				flag=1;
			}
		} else {
			if(getArr[num-4]==getArr[num-8] && getArr[num-4]!=0){
				getArr[num-4]=parseInt(getArr[num-4])*2;
				getArr[num-8]=0;
				flag=1;
			}
			else if(getArr[num-8]==getArr[num-12] && getArr[num-8]!=0){
				getArr[num-8]=parseInt(getArr[num-8])*2;
				getArr[num-12]=0;
				flag=1;
			}
			else if(getArr[num-4]==getArr[num-12] && getArr[num-4]!=0 && getArr[num-8]==0){
				getArr[num-4]=parseInt(getArr[num-4])*2;
				getArr[num-12]=0;
				flag=1;
			}
		}

		for(var j=num;j>=num-8;j=j-4){
			if(getArr[j]==0){
				for(var i=j-4;i>=0;i=i-4){
					if(getArr[i]!=0){
						getArr[j]=getArr[i];
						getArr[i]=0;
						flag=1;
						break;
					}
				}
			}
		}
	}
	fresh();
	if(flag==1){
		randnum();
	}
}

function right(){
	var flag=0;
	for(var num=3;num<16;num=num+4){
		if(getArr[num]!=0){
			if(getArr[num]==getArr[num-1]){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-1]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num-2] && getArr[num-1]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-2]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num-3] && getArr[num-1]==0 && getArr[num-2]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num-3]=0;
				flag=1;
			}
			else if(getArr[num-1]==getArr[num-2] && getArr[num-1]!=0){
				getArr[num-1]=parseInt(getArr[num-1])*2;
				getArr[num-2]=0;
				flag=1;
			}
			else if(getArr[num-2]==getArr[num-3] && getArr[num-2]!=0){
				getArr[num-2]=parseInt(getArr[num-2])*2;
				getArr[num-3]=0;
				flag=1;
			}
			else if(getArr[num-1]==getArr[num-3] && getArr[num-1]!=0 && getArr[num-2]==0){
				getArr[num-1]=parseInt(getArr[num-1])*2;
				getArr[num-3]=0;
				flag=1;
			}
		} else {
			if(getArr[num-1]==getArr[num-2] && getArr[num-1]!=0){
				getArr[num-1]=parseInt(getArr[num-1])*2;
				getArr[num-2]=0;
				flag=1;
			}
			else if(getArr[num-2]==getArr[num-3] && getArr[num-2]!=0){
				getArr[num-2]=parseInt(getArr[num-2])*2;
				getArr[num-3]=0;
				flag=1;
			}
			else if(getArr[num-1]==getArr[num-3] && getArr[num-1]!=0 && getArr[num-2]==0){
				getArr[num-1]=parseInt(getArr[num-1])*2;
				getArr[num-3]=0;
				flag=1;
			}
		}

		for(var j=num;j>=num-2;j--){
			if(getArr[j]==0){
				for(var i=j-1;i>=num-3;i--){
					if(getArr[i]!=0){
						getArr[j]=getArr[i];
						getArr[i]=0;
						flag=1;
						break;
					}
				}
			}
		}
	}
	fresh();
	if(flag==1){
		randnum();
	}
}

function left(){
	var flag=0;
	for(var num=0;num<13;num=num+4){
		if(getArr[num]!=0){
			if(getArr[num]==getArr[num+1]){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+1]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num+2] && getArr[num+1]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+2]=0;
				flag=1;
			}
			else if(getArr[num]==getArr[num+3] && getArr[num+1]==0 && getArr[num+2]==0){
				getArr[num]=parseInt(getArr[num])*2;
				getArr[num+3]=0;
				flag=1;
			}
			else if(getArr[num+1]==getArr[num+2] && getArr[num+1]!=0){
				getArr[num+1]=parseInt(getArr[num+1])*2;
				getArr[num+2]=0;
				flag=1;
			}
			else if(getArr[num+2]==getArr[num+3] && getArr[num+2]!=0){
				getArr[num+2]=parseInt(getArr[num+2])*2;
				getArr[num+3]=0;
				flag=1;
			}
			else if(getArr[num+1]==getArr[num+3] && getArr[num+1]!=0 && getArr[num+2]==0){
				getArr[num+1]=parseInt(getArr[num+1])*2;
				getArr[num+3]=0;
				flag=1;
			}
		} else {
			if(getArr[num+1]==getArr[num+2] && getArr[num+1]!=0){
				getArr[num+1]=parseInt(getArr[num+1])*2;
				getArr[num+2]=0;
				flag=1;
			}
			else if(getArr[num+2]==getArr[num+3] && getArr[num+2]!=0){
				getArr[num+2]=parseInt(getArr[num+2])*2;
				getArr[num+3]=0;
				flag=1;
			}
			else if(getArr[num+1]==getArr[num+3] && getArr[num+1]!=0 && getArr[num+2]==0){
				getArr[num+1]=parseInt(getArr[num+1])*2;
				getArr[num+3]=0;
				flag=1;
			}
		}

		for(var j=num;j<=num+2;j++){
			if(getArr[j]==0){
				for(var i=j+1;i<=num+3;i++){
					if(getArr[i]!=0){
						getArr[j]=getArr[i];
						getArr[i]=0;
						flag=1;
						break;
					}
				}
			}
		}
	}
	fresh();
	if(flag==1){
		randnum();
	}
}