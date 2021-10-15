# weather-app
Weather App API
This is the skeleton application of the weather forecast application

## How to test: 

To run the application loccally, from the web-server folder run the command: 

> node src/app.js

 ### Error handling:

- if you won't provide an address - the validation will work and will ask you to provide the address

### Routing
 > About - 
 http://localhost:3000/about
 > Help
 http://localhost:3000/help
 > Weather
 http://localhost:3000/
 > 404 
 http://localhost:3000/vfvf
 error message

 ### TODO
 
 1. Generete the token for forecast
 2. Generate the token for geocode
 3. Add comments to the code
 4. Deploy

 ### Blockers

 - if you provide an address it will show 'Loading ...' because of token. 
To solve that issue it must be a service that provides the token for latitude and longitude.








