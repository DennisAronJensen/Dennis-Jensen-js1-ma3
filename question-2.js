/*Question 2
Make a call to the following API endpoint:
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
*/


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

async function api(){
    const getApi = await fetch(url);
    
    for (let i = 8; i < getApi.length; i++) {
        const x = getApi[i];
        
    }
    document.getElementsByClassName("list").innerHTML = "url"

    console.log(getApi);
}

api();