const inputBox=document.getElementById('input')
 const main=document.getElementById('main')     
        
        inputBox.addEventListener('keypress',async(e)=>{
            if(e.key=='Enter'){
                try {
                    if(inputBox.value){
                        
                        const str=inputBox.value.split('')
                        
                        const filtered=str.filter((item)=>item.match(/[a-zA-Z]/))
                        filteredText=filtered.join('')
                    const response=await axios(`http://www.omdbapi.com/?s=${filteredText}&apikey=97418c0f`)
                    if(response.data.Response)
                    {
                        const data=response.data
                    inputBox.blur()
                    var movieContainer=document.getElementById('movies')
                    movieContainer.remove();

                    //create again container
                    var movieContainer=document.createElement('div')
                    movieContainer.classList.add('movies')
                    movieContainer.id='movies' 
                     main.appendChild(movieContainer)
                     
                    
                    data.Search.forEach((item) => {
                        
                        const movieBox=document.createElement('div')
                        movieBox.classList.add('movieBox')
                        const image=document.createElement('img')
                        image.src=item.Poster;
                        image.classList.add('image')
                        movieContainer.appendChild(movieBox)
                        movieBox.appendChild(image)
                        const title=document.createElement('h4')
                        title.style.textAlign='center'
                        title.innerText=item.Title;
                        title.style.color='white'
                        movieBox.appendChild(title)
                        const watchButton=document.createElement('button')
                        watchButton.classList.add('watchButton')
                        watchButton.innerText='Watch Movie'
                        movieBox.appendChild(watchButton)

                     });
                    
                    }}
                } catch (error) {
                    inputBox.value=''
                    window.alert("No Movie Found. Please try again.")
                }
                
            }
        })
        


