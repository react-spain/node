- Express inicio
``` 
const express = require('express');
const app = express();
app.set('port', 4000);

app.listen(app.get('port'),()=>{
	console.log('Server on port', app.get('port'));
})
```

``` 
const express = require('express');
const app = express();


server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
``` 


