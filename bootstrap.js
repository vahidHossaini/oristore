module.exports = class storeBootstrap{
  constructor(config)
  {
    this.funcs=[
      {
          name:'sampleFunction',
          title:'this is sample' ,
          inputs:[
			{
				name:'user',
				type:'UserInterface',
				nullable:false
			}
          ]
      }, 
	  
	  
	   
    ]
    this.auth=[ 
        ]
  }
}