const option = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

switch(option){
	case 'add':
		 console.log(n1 + n2)
		break;
	case 'sub':
        console.log(n1 - n2)
		break;
}